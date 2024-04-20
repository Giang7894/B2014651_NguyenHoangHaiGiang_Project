<script>
export default {
    props: {
        pubs: { type: Array, default: [] },
    },
}
</script>


<template>
    <table class="table table-hover table-striped table-bordered border-black">
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(pub, index) in pubs" :key="pub._id">
                <td>{{ pub.name }}</td>
                <td>{{ pub.address }}</td>

                <td><router-link :to="{ name: 'publisher.edit', params: { id: pub._id } }"><a type="button"
                            class="btn btn-success"><i class="fas fa-edit
                            pe-1"></i>Edit</a>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
