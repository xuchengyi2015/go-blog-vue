import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import("@/views/home") },
        { path: '/article/:id', component: () => import("@/views/article") },
        { path: '/aboutme', component: () => import("@/views/aboutMe") }
    ]
})

export default router;