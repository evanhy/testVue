import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import baseRouters from './modules/base'
import vueUseRouters from './modules/vueUse'
import echartsRouters from "@/router/modules/echarts";
import proTable from './modules/proTable';
import playground from "@/router/modules/playground";
import vueDraggable from "@/router/modules/draggable";
import components from "./modules/components"

const routes: RouteRecordRaw[] = [...baseRouters, ...vueUseRouters, ...echartsRouters, ...proTable, ...playground, ...vueDraggable, ...components]

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
