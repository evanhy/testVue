import EvanConfirm from "@/views/components/components/confirm/confirm.vue"
import EvanButton from "@/views/components/components/button/index.vue"
import ALink from "@/components/ALink/index.vue"
import {App} from "vue"

export default {
    install(Vue: App) {
        Vue.component("EvanConfirm", EvanConfirm)
        Vue.component("EvanButton", EvanButton)
        Vue.component("ALink", ALink)
    },
}
