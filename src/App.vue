<script setup lang="ts">
import CountDown from "@components/CountDown.vue";
import MyClock from "@components/MyClock.vue";</script>

<template>
    <div id="app">
        <my-clock></my-clock>
        <count-down></count-down>
    </div>
</template>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
}
</style>
