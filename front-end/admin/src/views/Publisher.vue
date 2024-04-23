<script>
import PublisherList from "@/components/publisher/PublisherList.vue"
import PublisherService from "@/services/publisher.service"

export default {
    components: {
        PublisherList,
    },
    data() {
        return {
            pubs: [],
            searchText: '',
        };
    },
    watch: {

    },
    computed: {
        pubsStrings() {
            return this.pubs.map((pub) => {
                const { name } = pub;
                return [name].join("");
            });
        },
        filteredPubs() {
            if (!this.searchText) return this.pubs;
            return this.pubs.filter((_pub, index) => this.pubsStrings[index].toLowerCase().includes(this.searchText.toLowerCase()));
        },
        filteredPubsCount() {
            return this.filteredPubs.length;
        },
    },
    methods: {
        async retrievePubs() {
            try {
                this.pubs = await PublisherService.getAll();

            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrievePubs();
        },

        async gotoAddPub() {
            this.$router.push({ name: "publisher.add" });
        },
    },
    mounted() {
        this.refreshList();
    }
}
</script>

<template>
    <form action="#" class="searchform order-sm-start order-lg-last">
        <div class="form-group d-flex">
            <input type="text" class="form-control pl-3" placeholder="Search" v-model="this.searchText">
        </div>
    </form>
    <h1 class="text-center">PUBLISHER</h1>
    <a type="button" class="btn btn-primary mb-5" @click="gotoAddPub">Add new publisher</a>
    <PublisherList v-if="filteredPubsCount > 0" :pubs="filteredPubs" />
    <p v-else>No publisher</p>
</template>


<style>
.page {
    text-align: left;
    max-width: 750px;
}
</style>