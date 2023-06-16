export default [
    {
        path: "/components",
        name: "Components",
        component: () => import("@/views/components/index.vue"),
        children: [
            {
                path: "confirm",
                name: "Confirm",
                component: () => import("@/views/components/Page/confirm/confirm.vue")
            },
            {
                path: "message",
                name: "Message",
                component: () => import("@/views/components/Page/message/message.vue")
            },
            {
                path: 'button',
                name: 'Button',
                component: () => import('@/views/components/Page/button/index.vue')
            }
        ]
    }
]