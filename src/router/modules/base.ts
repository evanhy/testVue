export default [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/homes/HomePage.vue'),
        meta: {
            title: '首页',
        },
    },
    {
        path: '/clock',
        name: 'clock',
        component: () => import('@/components/Clock/index.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/common/404Page.vue'),
    },
]
