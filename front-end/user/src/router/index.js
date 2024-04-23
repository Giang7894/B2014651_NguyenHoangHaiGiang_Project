import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
// import { useStore } from "vuex";
// const store=useStore()

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/detail",
        name: "detail",
        component: () => import("@/views/Request.vue"),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("@/components/RegisterForm.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to) => {
    if (localStorage.getItem('user') == null && to.name == 'register') {
    } else {
        if (localStorage.getItem('user') == null && to.name != 'login') {
            return { name: 'login' }
        }
        if (localStorage.getItem('user') != null && (to.name == 'login' || to.name == 'register')) {
            return { name: 'home' };
        }
    }
})
export default router;