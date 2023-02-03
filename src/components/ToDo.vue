<script setup lang="ts">
import {ref} from "vue";

defineOptions({
    name: 'ToDo',
    // inheritAttrs: false,
})
const nowTime = ref(new Date());

//格式化时间
const dateFormat = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let week = date.getDay(); // 星期
    let weekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",];
    return (
        year + "年" + month + "月" + day + "日 " + hours + ":" + minutes + ":" + seconds + " " + weekArr[week]
    );
}
</script>

<template>
    <h1>{{ nowTime }}</h1>
</template>

<style scoped>

</style>
