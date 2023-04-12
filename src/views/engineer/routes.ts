import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'eslint',
    name: 'eslint',
    component: () => import('@/views/engineer/eslint/index.vue'),
    meta: {
      title: 'Eslit'
    }
  },
  {
    path: 'vite',
    name: 'vite',
    component: () => import('@/views/engineer/vite/index.vue'),
    meta: {
      title: 'vite'
    }
  },
];

export default routes;
