<script>
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('admin')),
        }
    }
}
</script>

<template>
    <h1 class="text-center">WELCOME HOME {{ user.name }}</h1>
</template>


<style>

</style>