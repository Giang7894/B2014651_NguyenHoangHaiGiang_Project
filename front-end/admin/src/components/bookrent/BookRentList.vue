<script>
import bookService from '@/services/book.service';
import bookrentService from '@/services/bookrent.service';
export default {
    props: {
        bookrents:{type:Array,default:[]},
        books: { type: Array, default: [] },
        readers: { type: Array, default: [] },
        employees: { type: Array, default: [] },
    },
    data() {
        return {
            role: JSON.parse(localStorage.getItem('admin')).role,
            user: JSON.parse(localStorage.getItem('admin')),
        }
    },
    methods: {
        async approve(id) {
            try {
                await bookrentService.approve(id);
            } catch (error) {
                console.log(error);
            }
            this.$forceUpdate();
        },
        async cancel(id) {
            try {
                await bookrentService.cancel(id);
            } catch (error) {
                console.log(error);
            }
            this.$forceUpdate();
        },

        async checkBorrow(bookrent) {
            const data = { id: this.user._id };
            try {
                await bookService.borrowBook(bookrent.bookId);
                await bookrentService.borrowBook(bookrent._id, data);
            } catch (error) {
                console.log(error);
            }
            this.$forceUpdate();
        },

        async checkReturn(bookrent) {
            const data = { id: this.user._id };
            try {
                await bookService.returnBook(bookrent.bookId);
                await bookrentService.returnBook(bookrent._id, data);
            } catch (error) {
                console.log(error);
            }
            this.$forceUpdate();
        }
    },
}
</script>


<template>

    <table class="table table-hover table-striped table-bordered border-black">
        <thead>
            <tr>
                <th>Book name</th>
                <th>Reader</th>
                <th v-if="this.role=='manager'">Employee give</th>
                <th v-if="this.role=='manager'">Employee take</th>
                <th v-if="this.role=='manager'">Request date</th>
                <th>Borrowed date</th>
                <th>Must Return date</th>
                <th>Status</th>
                <th v-if="this.role=='manager'">Action</th>
                <th>Checked borrow</th>
                <th>Return status</th>
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
                <td v-if="this.role=='manager'">
                    <p v-for="(employee,index) in employees">
                    <p v-if="employee._id==bookrent.employee1">{{ employee.name }}</p>
                    </p>
                </td>
                <td v-if="this.role == 'manager'">
                    <p v-for="(employee, index) in employees">
                    <p v-if="employee._id == bookrent.employee2">{{ employee.name }}</p>
                    </p>
                </td>
                <td v-if="this.role=='manager'">{{ new Date(bookrent.reqDate).toLocaleDateString() }}</td>
                <td>
                    <p v-if="bookrent.rentDate!=null">{{ new Date(bookrent.rentDate).toLocaleDateString()}}</p>
                </td>
                <td v-if="bookrent.rentDate!=null">{{ new Date(new Date(bookrent.rentDate).setDate(new
                    Date(bookrent.rentDate).getDate()+3)).toLocaleDateString() }}</td>
                <td v-else></td>
                <td v-if="this.role=='manager'">
                    <p v-if="bookrent.status==0">Not approved</p>
                    <p v-if="bookrent.status==1" class="text-success">Approved</p>
                    <p v-if="bookrent.status==-1" class="text-danger">Canceled</p>
                </td>
                <td v-if="this.role=='manager' && bookrent.status==0">
                    <button :disabled="bookrent.status==1" type="button" class="btn btn-success"
                        @click="approve(bookrent._id)">
                        <i class="fas fa-check pe-1"></i>Approve
                    </button>
                    <p></p>
                    <button type="button" class="btn btn-danger" @click="cancel(bookrent._id)">
                        <i class="fas fa-cancel pe-1"></i>Cancel
                    </button>
                </td>
                <td v-if="bookrent.status == 1" class="text-success">Have been approved</td>
                <td v-if="bookrent.status==-1" class="text-danger"> </td>
                <td v-if="bookrent.rentDate == null && bookrent.status==1"><button @click="checkBorrow(bookrent)"
                        class="btn btn-success">Check</button></td>
                <td v-if="bookrent.rentDate!=null">In borrowed</td>
                <td v-if="bookrent.rentDate == null && bookrent.status == 0">Have not been approved</td>
                <td v-if="bookrent.rentDate == null && bookrent.status == -1" class="text-danger"> </td>
                <td v-if="bookrent.returnDate!=null">Returned</td>
                <td v-if="bookrent.returnDate==null && bookrent.status==1">
                    <p>Not yet returned</p><button class="btn btn-warning" @click="checkReturn(bookrent)">Check</button>
                </td>
                <td v-if="bookrent.status==0 && bookrent.returnDate==null">Have not been approved</td>
                <td v-if="bookrent.status == -1 && bookrent.returnDate == null"> </td>
            </tr>
        </tbody>
    </table>
</template>
