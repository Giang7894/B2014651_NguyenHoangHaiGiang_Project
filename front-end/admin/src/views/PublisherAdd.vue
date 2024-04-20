<template>
    <h1>Add publisher</h1>
    <PubForm :pub="pub" @submit:pub="addPub" />
    <p>{{ message }}</p>
</template>


<script>
import PubForm from "@/components/publisher/PublisherForm.vue";
import publisherService from "@/services/publisher.service";

export default {
    components: {
        PubForm,
    },
    data() {
        return {
            pub: {
                name: "",
                address: "",
            },
            message: "",
        };
    },
    methods: {
        async addPub(data) {
            try {
                await publisherService.create(data);
                this.message = "Success";
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>