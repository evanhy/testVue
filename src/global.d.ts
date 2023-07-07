import EvanConfirm from "@/views/components/components/confirm/confirm.vue"
import EvanButton from "@/views/components/components/button/index.vue"
import ALink from "@/components/ALink/index.vue"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EvanConfirm: typeof EvanConfirm
    EvanButton: typeof EvanButton
    ALink: typeof ALink
  }
}
