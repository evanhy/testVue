import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"

import baseRouters from "./modules/base"
import vueUseRouters from "./modules/vueuse"
import playground from "./modules/playground"
import vueDraggable from "./modules/draggable"
import components from "./modules/components"

const routes: RouteRecordRaw[] = [...baseRouters, ...vueUseRouters, ...playground, ...vueDraggable, ...components]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_URL) || createWebHashHistory(),
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
