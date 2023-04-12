import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'reactive',
    name: 'reactive',
    component: () => import('@/views/vue/reactive/index.vue'),
    meta: {
        title: 'reactive',
        showBack: true,
        isGotoKeepAlive: true
    },
  },
  {
    path: 'ref',
    name: 'ref',
    component: () => import('@/views/vue/ref/index.vue'),
    meta: {
        title: 'ref',
        hiddenMenu: true,
        showBack: true,
        isGotoKeepAlive: true
    },
  },
  {
    path: 'watch',
    name: 'watch',
    component: () => import('@/layout/layout-blank.vue'),
    children: [
      {
        path: 'watch-props',
        name: 'watchProps',
        component: () => import('@/views/vue/watch/watch-props/index.vue'),
        meta: {
          title: 'watch-props',
          menu: true,
          keepAlive: true,
        }
      },
      {
        path: 'watch-ref',
        name: 'watchRef',
        component: () => import('@/views/vue/watch/watch-ref/index.vue'),
        meta: {
          title: 'watch-ref',
          menu: true,
          keepAlive: true,
        }
      },
    ],
    meta: {
      title: 'watch',
      menu: true,
      hasParent: true,
      keepAlive: true,
    },
  },
];

export default routes;
