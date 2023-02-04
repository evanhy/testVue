export default [
    {
        path: '/vueuse',
        name: 'VueUse',
        component: () => import('@/views/VueUse/index.vue'),
        children: [
            {
                path: '/vueuse/useMouse',
                name: 'useMouse',
                component: () => import('@/views/VueUse/SensorsUse/UseMouse.vue'),
            },
            {
                path: '/vueuse/useDraggable',
                name: 'useDraggable',
                component: () => import('@/views/VueUse/ElementsUse/UseDraggable.vue'),
            },
        ],
    },
]
