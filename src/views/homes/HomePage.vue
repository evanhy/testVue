<script setup lang="ts">
import { useRouter } from 'vue-router'
defineOptions({
    name: 'HomePage',
})
const router = useRouter()
const goClock = () => {
    router.push('/clock')
}
</script>

<template>
    <div>
        <h3 style="color: white">HomePage</h3>
        <button class="clock" @click="goClock">时钟</button>
    </div>
</template>

<style lang="scss" scoped>
.clock {
    font-weight: 700;
    &:hover {
        background: pink;
    }
}
</style>
