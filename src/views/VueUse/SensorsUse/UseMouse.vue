<template>
    <div class="use-mouse">
        <div class="describe">
            <span>VueUse中的获取鼠标坐标的方法~</span>
        </div>
        <h1>测试 vueUse 的鼠标坐标</h1>
        <h3>Mouse: {{ x }} x {{ y }}</h3>
    </div>
</template>

<script lang="ts">
import { useMouse } from '@vueuse/core'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'UseMouse',
    setup() {
        const { x, y } = useMouse()

        return {
            x,
            y,
        }
    },
})
</script>
<style lang="scss" scoped></style>
