<script>
import BookRentList from "@/components/bookrent/BookRentList.vue"
import BookRentService from "@/services/bookrent.service";
import employeeService from "@/services/employee.service";
import readerService from "@/services/reader.service";
import bookService from "@/services/book.service";

export default {
    components: {
        BookRentList,
    },
    data() {
        return {
            bookrents:[],
            books: [],
            readers: [],
            employees:[],
            searchText: '',
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
            return this.bookrents.filter((_bookrent, index) => this.bookRentStrings[index].includes(this.searchText));
        },
        filteredBookRentsCount() {
            return this.filteredBookRents.length;
        },
        reader() {
            return this.readers;
        },
        em() {
            return this.employees;
        },
        book() {
            return this.books;
        }
    },
    methods: {
        async retrieveBooks() {
            try {
                this.books = await bookService.getAll();
                this.readers = await readerService.getAll();
                this.employees = await employeeService.getAll();
                this.bookrents = await BookRentService.getAll();
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
    <h1 class="text-center">BOOK RENTAL</h1>
    <BookRentList v-if="filteredBookRentsCount > 0" :bookrents="filteredBookRents" :readers="reader" :books="book" :employees="em" />
    <p v-else>No book rental what so ever</p>
</template>


<style>
.page {
    text-align: left;
    max-width: 750px;
}
</style>