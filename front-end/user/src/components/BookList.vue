<script>
import bookRentService from "@/services/bookrent.service"
export default {
    props: {
        books: { type: Array, default: [] },
        user: {type: JSON,default: null},
    },
    methods: {
        async borrow(id) {
            try {
                const data = {
                    readerId: this.user._id,
                    bookId: id,
                }
                const d= JSON.stringify(data);
                const object = await bookRentService.find(data);;
                for (const key in object) {
                    if (Object.hasOwnProperty.call(object, key)) {
                        const element = object[key];
                        if (element.status == 0) { alert("Already request this book"); return; }
                    }
                }
                await bookRentService.create(data);
                this.$router.push({ name: 'detail' });
            } catch (error) {
                console.log(error);
            }
        },
    }

}
</script>

<template>
    <div class="row">
        <div v-for="(book,index) in books" class="col-3 border m-4 p-3 border-dark shadow bg-body-tertiary rounded">
            <div>{{ book.name }}</div>
            <div><img v-bind:src="book.image" style="width: 100%;" /></div>
            <div>Avaliable: {{ book.instore }}</div>
            <button @click="borrow(book._id)" v-if="book.instore>1" class="btn btn-outline-success">Request</button>
            <p v-else>No book left</p>
        </div>
    </div>

</template>