<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
    initialValue: { x: 300, y: 350 },
})
</script>

<template>
    <div ref="el" :style="style" style="position: fixed; border: 1px solid #ccc; padding: 10px">
        拖拽我! I am at x: {{ x }}, y: {{ y }}
    </div>
    <div class="describe">可拖拽的盒子</div>
</template>
