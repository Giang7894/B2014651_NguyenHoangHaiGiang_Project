

<template>
    <h1>Add book</h1>
    <BookForm :book="book" @submit:book="addBook" :pubs="this.pubs"/>
    <p>{{ message }}</p>
</template>


<script>
import BookForm from "@/components/book/BookForm.vue";
import bookService from "@/services/book.service";
import publisherService from "@/services/publisher.service";

export default {
    components: {
        BookForm,
    },
    data() {
        return {
            book: {
                name: "",
                author: "",
                price: "",
                pub: "",
                total: "",
                img: "",
            },
            message: "",
            pubs:[],
        };
    },
    methods: {
        async addBook(data) {
            try {
                await bookService.create(data);
                this.message = "Success";
            } catch (error) {
                console.log(error);
            }
        },
        async retrievePub() {
            try {
               this.pubs= await publisherService.getAll();
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.retrievePub();
    }
}
</script>