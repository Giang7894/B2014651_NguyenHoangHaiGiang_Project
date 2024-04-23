<template>
    <h1>Add reader</h1>
    <ReaderForm :reader="reader" @submit:reader="addReader" />
    <p>{{ message }}</p>
</template>


<script>
import ReaderForm from "@/components/reader/ReaderForm.vue";
import readerService from "@/services/reader.service";

export default {
    components: {
        ReaderForm,
    },
    data() {
        return {
            reader: {
                name: "",
                address: "",
                phone: "",
                sex: "",
                birth: "",
                email:"",
            },
            message: "",
        };
    },
    methods: {
        async addReader(data) {
            try {
                await readerService.create(data);
                this.message = "Success";
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>