<template>
    <h1>Edit reader</h1>
    <ReaderForm :reader="reader" @submit:reader="updateReader" @delete:reader="deleteReader" />
</template>

<script>
import ReaderForm from "@/components/reader/ReaderForm.vue";
import readerSerivice from "@/services/reader.service";

export default {
    components: {
        ReaderForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            reader: null,
            message: "",
        }
    },
    methods: {
        async getReader(id) {
            try {
                this.reader = await readerSerivice.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        async updateReader(data) {
            try {
                await readerSerivice.update(this.reader._id, data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteReader() {
            try {
                await readerSerivice.delete(this.reader._id);
                this.$router.push({ name: "reader" });
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getReader(this.id);
        this.message = "";
    }
}
</script>