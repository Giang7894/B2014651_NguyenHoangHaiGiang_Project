<script>
import publisherService from '@/services/publisher.service';

export default {
    props: {
        books: { type: Array, default: [] },
        pubs:{type:Array,default:[]},
    },

}
</script>


<template>
    <table class="table table-hover table-striped table-bordered border-black">
        <thead>
            <tr>
                <th>Name</th>
                <th>Publisher</th>
                <th>Author</th>
                <th>Price</th>
                <th>Total</th>
                <th>Rented</th>
                <th>In store</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(book,index) in books" :key="book._id">
                <td>{{ book.name }}</td>
                <td>
                <p v-for="(pub, index) in pubs ">
                <p v-if="pub._id == book.publisher">{{ pub.name }}</p>
                </p>
                </td>
                <td>{{ book.author }}</td>
                <td>{{ book.price }}</td>
                <td>{{ book.quantity }}</td>
                <td>{{ book.quantity-book.instore }}</td>
                <td>{{ book.instore }}</td>

                <td><router-link :to="{name:'book.edit', params: {id: book._id}}"><a type="button"
                            class="btn btn-success"><i class="fas fa-edit
                            pe-1"></i>Edit</a>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
