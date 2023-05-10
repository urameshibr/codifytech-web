import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import bookRoutes from "@/router/books";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: 'livros',
    },
    ...bookRoutes
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
