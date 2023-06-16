export default [
    {
        path: "/playground",
        name: "Playground",
        component: () => import("@/views/PlayGround/index.vue"),
        children: [
            {
                path: "/video",
                name: "Video",
                component: () => import("@/views/PlayGround/MyVideo.vue"),
            }
        ]
    }
]