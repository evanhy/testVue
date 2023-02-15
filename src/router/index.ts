import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import baseRouters from './modules/base'
import vueUseRouters from './modules/vueUse'
import echartsRouters from "@/router/modules/echarts";

const routes: RouteRecordRaw[] = [...baseRouters, ...vueUseRouters, ...echartsRouters]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        }
    },
})

export default router
