<script setup lang="ts">
import { reactive } from "vue"
import gsap from "gsap"

type Props = {
  from: number
  to: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  from: 0,
  to: 0,
  duration: 1,
})

let tweened = reactive({
  number: props.from,
})

gsap.to(tweened, { duration: props.duration, ease: "power1.out", number: props.to.toFixed(0) })
</script>

<template>
  <div>
    {{ tweened.number.toFixed(0) }}
  </div>
</template>
