export default [
    {
        path: "/playground",
        name: "Playground",
        component: () => import("@/views/PlayGround/index.vue"),
    },
    {
        path: "/test",
        name: "Test",
        component: () => import("@/views/PlayGround/test.vue"),
    }
]
