<script setup lang="ts">
import CountDown from '@/components/Clock/CountDown.vue';
import MyClock from '@/components/Clock/MyClock.vue';
import { defineOptions } from 'unplugin-vue-define-options/macros';
defineOptions({
    name: 'NewClock',
})
const router = useRouter()
const goBack = () => {
    router.back()
}
</script>
<template>
    <div class="Clock">
        <button @click="goBack" class="go-back">返回</button>
        <my-clock></my-clock>
        <count-down></count-down>
    </div>
</template>

<style lang="scss" scoped>
.Clock {
    background: #050842;
    text-align: center;
    .go-back {
        color: white;
        background: #8287e0;
    }
}
</style>
