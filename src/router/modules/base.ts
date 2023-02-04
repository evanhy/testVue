const clock = () => import('@/components/Clock/index.vue')
const home = () => import('@/views/homes/HomePage.vue')
const Page404 = () => import('@/views/common/404Page.vue')
export default [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        component: home,
    },
    {
        path: '/clock',
        name: 'clock',
        component: clock,
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: Page404,
    },
]
