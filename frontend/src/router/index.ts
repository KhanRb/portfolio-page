import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: () => import('../views/HomeView.vue') },

    // menu routes
    { path: '/resume', name: 'resume', component: () => import('../views/ResumeView.vue') },
    { path: '/projects' , name: 'projects', component: () => import('../views/ProjectsView.vue') },

    // Catch-all route for 404 Not Found
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
]

const router = createRouter({
    history: createWebHistory('/portfolio-page/'),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router