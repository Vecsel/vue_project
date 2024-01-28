import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
