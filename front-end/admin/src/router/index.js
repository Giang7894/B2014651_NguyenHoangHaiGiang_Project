import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: '/book',
        name: 'book',
        component: () => import("@/views/Book.vue"),
    },
    {
        path: '/reader',
        name: 'reader',
        component: () => import("@/views/Reader.vue"),
    },
    {
        path: '/publisher',
        name: 'publisher',
        component: ()=> import("@/views/Publisher.vue"),
    },
    {
        path: '/employee',
        name: 'employee',
        component: () => import("@/views/Employee.vue"),
    },
    {
        path: '/bookrent',
        name: 'bookrent',
        component: () => import("@/views/BookRental.vue"),
    },
    {
        path: '/book/add',
        name: 'book.add',
        component: () => import("@/views/BookAdd.vue"),
    },
    {
        path: "/book/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        props: true,
    },
    {
        path: "/publisher/:id",
        name: "publisher.edit",
        component: () => import("@/views/PublisherEdit.vue"),
        props: true,
    },
    {
        path: "/publisher/add",
        name: "publisher.add",
        component: () => import("@/views/PublisherAdd.vue"),

    },
    {
        path: "/employee/:id",
        name: "employee.edit",
        component: () => import("@/views/EmployeeEdit.vue"),
        props: true,
    },
    {
        path: "/employee/add",
        name: "employee.add",
        component: () => import("@/views/EmployeeAdd.vue"),
    },
    {
        path: "/reader/:id",
        name: "reader.edit",
        component: () => import("@/views/ReaderEdit.vue"),
        props: true,
    },
    {
        path: "/reader/add",
        name: "reader.add",
        component: () => import("@/views/ReaderAdd.vue"),
    },
    {
        path: '/login',
        name: "login",
        component: () => import("@/components/LoginForm.vue"),
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to) => {
    if (to.name != 'login' && localStorage.getItem('admin') == null) {
        return { name: 'login' };
    }
    if (localStorage.getItem('admin') != null && to.name == 'login') {
        return { name: 'home' };
    }
    if (localStorage.getItem('admin') != null) {
        if (JSON.parse(localStorage.getItem('admin')).role == 'employee' && (to.name!='reader' && to.name!='home' && to.name!='reader.add' && to.name!='reader.edit' && to.name!='bookrent')) {
            return { name: 'home' };
        }
    }
})
export default router;