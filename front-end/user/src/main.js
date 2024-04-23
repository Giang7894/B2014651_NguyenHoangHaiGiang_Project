

import { useUserStore } from './store/user'
import { createPinia } from "pinia"
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import router from './router'

const pinia = createPinia();
const app = createApp(App)
app.use(pinia)
const userStore=useUserStore()
app.use(router)
app.mount('#app')
// createApp(App).use([router, pinia]).mount('#app')

