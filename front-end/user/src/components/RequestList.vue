
<script>

export default {
    props: {
        bookrents: { type: Array, default: [] },
        books: { type: Array, default: [] },
        user: {type: JSON,default: null},
    },
}
</script>

<template>

    <table class="table table-hover table-striped table-bordered border-black">
        <thead>
            <tr>
                <th>Book Name</th>
                <th>Request day</th>
                <th>Status</th>
                <th>Borrow date</th>
                <th>Return date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(bookrent, index) in bookrents" :key="bookrent._id">
                <td>
                    <p v-for="(book,index) in books">
                    <p v-if="book._id==bookrent.bookId">{{ book.name }}</p>
                    </p>
                </td>
                <td>{{ new Date(bookrent.reqDate).toLocaleDateString() }}</td>
                <td>
                    <p v-if="bookrent.status==1 && bookrent.status!=null" class="text-success">Approved</p>
                    <p v-if="bookrent.status==0">Not approve yet</p>
                    <p v-if="bookrent.status==-1" class="text-danger">Have been canceled</p>
                </td>
                <td>
                    <p v-if="bookrent.rentDate!=null">{{ new Date(bookrent.rentDate).toLocaleDateString() }}</p>
                    <p v-else>NaN</p>
                </td>
                <td>
                    <p v-if="bookrent.returnDate!=null">{{ new Date(bookrent.returnDate).toLocaleDateString() }}</p>
                    <p v-else>NaN</p>
                </td>
            </tr>
        </tbody>
    </table>

</template>