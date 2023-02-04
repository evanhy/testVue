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
            {
                path: '/vueuse/onClickOutside',
                name: 'onClickOutside',
                component: () => import('@/views/VueUse/SensorsUse/onClickOutside.vue'),
            },
            {
                path: '/vueuse/useFocusTrap',
                name: 'useFocusTrap',
                component: () => import('@/views/VueUse/Integrations/useFocusTrap.vue'),
            },
            {
                path: '/vueuse/useStorage',
                name: 'useStorage',
                component: () => import('@/views/VueUse/StatusUse/useStorage.vue'),
            },
        ],
    },
]
