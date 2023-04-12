import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout/layout.vue';

import VueRoutes from '@/views/vue/routes';

let routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'homepageIndex',
                component: () => import('@/views/homepage/index.vue'),
                meta: {
                    icon: 'FillAirplay'
                }
            }
        ],
        meta: {
            icon: 'FillAirplay',
            onlyOne: true,
            sort: 0,
            menu: true,
            title: '首页'
        }
    },
    {
        path: '/vue',
        name: 'vue',
        component: Layout,
        children: [...VueRoutes],
        meta: {
          sort: 1,
          icon: 'Link',
          title: 'vue',
          menu: true
        }
      },
]
// 路由
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PATH),
    routes
})
console.log(import.meta.env.VITE_BASE_URL,'router')
// 导出
export default router 