import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import baseRouters from "./modules/base"
import vueUseRouters from "./modules/vueUse"
import echartsRouters from "./modules/echarts"
import playground from "./modules/playground"
import vueDraggable from "./modules/draggable"
import components from "./modules/components"

const routes: RouteRecordRaw[] = [...baseRouters, ...vueUseRouters, ...echartsRouters, ...playground, ...vueDraggable, ...components]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    }
  },
})

export default router
