<script>
export default {
    props: {
        readers: { type: Array, default: [] },
    },
}
</script>


<template>
    <table class="table table-hover table-striped table-bordered border-black">
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(reader, index) in readers" :key="reader._id">
                <td>{{ reader.name }}</td>
                <td>{{ reader.phone }}</td>
                <td>{{ reader.address }}</td>
                <td>{{ reader.birth }}</td>
                <td>{{ reader.sex }}</td>
                <td><router-link :to="{ name: 'reader.edit', params: { id: reader._id } }"><a type="button"
                            class="btn btn-success"><i class="fas fa-edit
                            pe-1"></i>Edit</a>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
