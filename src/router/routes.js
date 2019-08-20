import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/', component: () => import("@/views/home") },
        { path: '/article/:id', component: () => import("@/views/article") },
        { path: '/onlinetools', component: () => import("@/views/onlineTools") }
    ]
})

export default router;