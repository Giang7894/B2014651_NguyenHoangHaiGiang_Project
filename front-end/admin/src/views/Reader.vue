<script>
import ReaderList from "@/components/reader/ReaderList.vue"
import readerSerivce from "@/services/reader.service"

export default {
    components: {
        ReaderList,
    },
    data() {
        return {
            readers: [],
            searchText: '',
        };
    },
    watch: {

    },
    computed: {
        readersStrings() {
            return this.readers.map((reader) => {
                const { name } = reader;
                return [name].join("");
            });
        },
        filteredReaders() {
            if (!this.searchText) return this.readers;
            return this.readers.filter((_reader, index) => this.readersStrings[index].includes(this.searchText));
        },
        filteredReadersCount() {
            return this.filteredReaders.length;
        },
    },
    methods: {
        async retrieveReaders() {
            try {
                this.readers = await readerSerivce.getAll();

            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveReaders();
        },

        async gotoAddReader() {
            this.$router.push({ name: "reader.add" });
        },
    },
    mounted() {
        this.refreshList();
    }
}
</script>

<template>
    <h1 class="text-center">READER</h1>
    <a type="button" class="btn btn-primary mb-5" @click="gotoAddReader">Add new reader</a>
    <ReaderList v-if="filteredReadersCount > 0" :readers="filteredReaders" />
    <p v-else>No reader</p>
</template>


<style>
.page {
    text-align: left;
    max-width: 750px;
}
</style>