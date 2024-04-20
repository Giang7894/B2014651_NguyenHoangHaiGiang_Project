import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';

const routes = {
    
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;