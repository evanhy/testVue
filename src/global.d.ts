import EvanConfirm from "@/views/components/components/confirm/confirm.vue"
import EvanButton from "@/views/components/components/button/index.vue"

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        EvanConfirm: typeof EvanConfirm
        EvanButton: typeof EvanButton
    }
}