<script>
export default {
    props: {
        employees: { type: Array, default: [] },
    },
}
</script>


<template>
    <table class="table table-hover table-striped table-bordered border-black">
        <thead>
            <tr>
                <th>Name</th>
                <th>Account</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Role</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(em, index) in employees" :key="em._id">
                <td>{{ em.name }}</td>
                <td>{{ em.account }}</td>
                <td>{{ em.phone }}</td>
                <td>{{ em.address }}</td>
                <td>{{ em.role }}</td>
                <td>{{ em.password }}</td>
                <td><router-link :to="{ name: 'employee.edit', params: { id: em._id } }"><a type="button"
                            class="btn btn-success"><i class="fas fa-edit
                            pe-1"></i>Edit</a>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
