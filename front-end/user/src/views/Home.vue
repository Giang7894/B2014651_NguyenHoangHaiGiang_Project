<script>
import BookList from "@/components/BookList.vue"
import BookService from "@/services/book.service";
export default {
    components: {
        BookList,
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            books: [],
            searchText: '',
        };
    },
    watch: {
        
    },
    computed: {
        bookStrings() {
            return this.books.map((book) => {
                const { name } = book;
                return [name].join("");
            });
        },
        filteredBooks() {
            if (!this.searchText) return this.books;
            return this.books.filter((_book, index) => this.bookStrings[index].toLocaleLowerCase().includes(this.searchText.toLowerCase()));
        },
        filteredBooksCount() {
            return this.filteredBooks.length;
        },
    },
    methods: {
        async retrieveBooks() {
            try {
                this.books = await BookService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveBooks();
        },

    },
    mounted() {
        this.refreshList();
    }
}
</script>


<template>
    <form action="#" class="searchform order-sm-start order-lg-last">
        <div class="form-group d-flex">
            <input type="text" class="form-control pl-3" placeholder="Search" v-model="this.searchText">
        </div>
    </form>
    <BookList v-if="filteredBooksCount > 0" :books="filteredBooks" :user="this.user"/>
    <p v-else>No book what so ever</p>
</template>