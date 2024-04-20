<template>
    <PubForm :pub="pub" @submit:pub="updatePub" @delete:pub="deletePub" />
</template>

<script>
import PubForm from "@/components/publisher/PublisherForm.vue";
import publisherService from "@/services/publisher.service";

export default {
    components: {
        PubForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            pub: null,
            message: "",
        }
    },
    methods: {
        async getPub(id) {
            try {
                this.pub = await publisherService.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        async updatePub(data) {
            try {
                await publisherService.update(this.pub._id, data);
            } catch (error) {
                console.log(error);
            }
        },
        async deletePub() {
            try {
                await publisherService.delete(this.pub._id);
                this.$router.push({ name: "publisher" });
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getPub(this.id);
        this.message = "";
    }
}
</script>