import App from "@/App.vue";
import EvanConfirm from "@/views/components/components/confirm/confirm.vue"
import EvanButton from "@/views/components/components/button/index.vue"

export default {
    install(Vue: App) {
        Vue.component("EvanConfirm", EvanConfirm)
        Vue.component("EvanButton", EvanButton)
    }
}