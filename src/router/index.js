import { createRouter, createWebHashHistory } from "vue-router";
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/home.vue'),
        },
        {
            path: '/details',
            name: 'Details',
            component: () => import('@/views/details.vue'),
        }
    ]
})
export default Router