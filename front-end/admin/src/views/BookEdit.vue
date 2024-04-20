<template>
<BookForm :book="book" @submit:book="updateBook" @delete:book="deleteBook"/>
</template>

<script>
import BookForm from "@/components/book/BookForm.vue";
import bookService from "@/services/book.service";

export default {
    components: {
        BookForm,
    },
    props: {
        id: { type:String,required: true},
    },
    data() {
        return {
            book: null,
            message: "",
        }
    },
    methods: {
        async getBook(id) {
            try {
                this.book = await bookService.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        async updateBook(data) {
            try {
                await bookService.update(this.book._id,data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBook() {
            try {
                await bookService.delete(this.book._id);
                this.$router.push({ name: "book" });
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getBook(this.id);
        this.message = "";
    }
}
</script>