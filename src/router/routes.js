import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import("@/views/main"),
            children: [
                {
                    path: '/',
                    component: () => import("@/views/home")
                },
                {
                    path: '/aboutme',
                    component: () => import("@/views/aboutMe")
                }
            ]
        },
        {
            path: '/article/:id',
            component: () => import("@/views/article")
        },
    ]
})

export default router;