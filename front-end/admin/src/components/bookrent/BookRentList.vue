<script>
export default {
    props: {
        bookrents:{type:Array,default:[]},
        books: { type: Array, default: [] },
        readers: { type: Array, default: [] },
        employees:{type:Array,default: []},
    },
}
</script>


<template>
    <table class="table table-hover table-striped table-bordered border-black">
        <thead>
            <tr>
                <th>Book name</th>
                <th>Reader</th>
                <th>Employee</th>
                <th>Borrowed date</th>
                <th>Return date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(bookrent, index) in bookrents" :key="bookrent._id">
                <td>
                    <p v-for="(book,index) in books">
                        <p v-if="book._id==bookrent.bookId">{{ book.name }}</p>
                    </p>
                </td>
                <td>
                    <p v-for="(reader, index) in readers ">
                    <p v-if="reader._id == bookrent.readerId">{{ reader.name }}</p>
                    </p>
                </td>
                <td>
                    <p v-for="(employee,index) in employees">
                    <p v-if="employee._id==bookrent.employeeId">{{ employee.name }}</p>
                    </p>
                </td>
                <td>{{ bookrent.rentDate }}</td>
                <td>{{ bookrent.returnDate }}</td>
                <td>{{ bookrent.status }}</td>
            </tr>
        </tbody>
    </table>
</template>
