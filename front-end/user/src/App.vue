<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import "@/assets/header.css";
import "@/assets/footer.css";
export default {
  components: {
    AppHeader,
    AppFooter,
  }
}

</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="container">
    <router-view />
  </main>
  <footer>
    <AppFooter />
  </footer>

</template>

<style scoped>


</style>
