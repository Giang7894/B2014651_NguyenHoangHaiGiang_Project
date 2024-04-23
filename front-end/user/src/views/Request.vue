<script>
import RequestList from "@/components/RequestList.vue"
import BookRentService from "@/services/bookrent.service";
import bookService from "@/services/book.service";
export default {
    components: {
        RequestList,
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            bookrents: [],
            searchText: '',
            books:[],
        };
    },
    watch: {

    },
    computed: {
        bookRentStrings() {
            return this.bookrents.map((bookrent) => {
                const { name } = bookrent;
                return [name].join("");
            });
        },
        filteredBookRents() {
            if (!this.searchText) return this.bookrents;
            return this.books.filter((_book, index) => this.bookStrings[index].toLocaleLowerCase().includes(this.searchText.toLowerCase()));
        },
        filteredBookRentsCount() {
            return this.filteredBookRents.length;
        },
    },
    methods: {
        async retrieveBookRents() {
            try {
                this.books = await bookService.getAll();
                this.bookrents = await BookRentService.findReaderBook(this.user._id);
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveBookRents();
        },
        logout() {
            localStorage.removeItem('user');
            this.$router.push({ name: 'login' });
        }

    },
    mounted() {
        this.refreshList();
    }
}
</script>


<template>
    <!-- <form action="#" class="searchform order-sm-start order-lg-last">
        <div class="form-group d-flex">
            <input type="text" class="form-control pl-3" placeholder="Search" v-model="this.searchText">
        </div>
    </form> -->
    <RequestList v-if="filteredBookRentsCount > 0" :bookrents="filteredBookRents" :user="this.user" :books="this.books"/>
    <p v-else>No book what so ever</p>
</template>