<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from "vue";

defineOptions({
    name: 'ToDo',
    // inheritAttrs: false,
})
const nowTime = ref<any>(new Date());

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
let timer = ref()
const currentYearDay = computed(() => {
    let nowYear = new Date().getFullYear();
    return (nowYear % 4 == 0 && nowYear % 100 != 0) || nowYear % 400 == 0 ? 366 : 365;
})
const remainderYearDay = computed(() => {
    let nowTime = new Date();
    let endTime = new Date(nowTime.getFullYear() + 1, 1, 1, 0, 0, 0, 0);
    return parseInt((endTime - nowTime) / 86400000) - 31;
})
const remainderMonthDay = computed(() => {
    let nowMonth = new Date().getMonth() + 1;
    let nowYear = new Date().getFullYear();
    let nowDay1 = new Date().getDate();
    if (nowMonth === 1 || nowMonth === 3 || nowMonth === 5 || nowMonth === 7 || nowMonth === 8 || nowMonth === 10 || nowMonth === 12) {
        return 31 - nowDay1;
    }
    if (nowMonth === 4 || nowMonth === 6 || nowMonth === 9 || nowMonth === 11) {
        return 30 - nowDay1;
    }
    if (nowMonth == 2) {
        if ((nowYear % 4 == 0 && nowYear % 100 != 0) || nowYear % 400 == 0) {
            return 29 - nowDay1;
        } else {
            return 28 - nowDay1;
        }
    }
})
const remainderWeekDay = computed(() => {
    return 7 - new Date().getDay();
})
const countdownWeekend = computed(() => {
    return 6 - new Date().getDay();
})
onMounted(() => {
    nowTime.value = new Date().toLocaleString();
    timer.value = setInterval(() => {
        nowTime.value = new Date().toLocaleString();
    }, 1000);
})
onUnmounted(() => {
    if (timer.value) {
        clearInterval(timer.value)
    }
})
</script>

<template>
    <div class="count-down">
        <div class="current-time">{{ nowTime }}</div>
        <br>
        <div>距离周末还有:{{ countdownWeekend }}天</div>
        <div>今天剩余的时间为:{{
                24 - (new Date().getHours() + 1)
            }}时{{ 60 - new Date().getMinutes() }}分{{ 60 - new Date().getSeconds() }}秒
        </div>
        <div>本周剩余的天数为:{{ remainderWeekDay }}</div>
        <div>本月剩余的天数为:{{ remainderMonthDay }}</div>
        <div>本年剩余的天数为:{{ remainderYearDay }}</div>
        <div>本年的天数为:{{ currentYearDay }}</div>
    </div>
</template>

<style lang="scss" scoped>
.count-down {
    text-align: center;
    font-size: 24px;
    color: #9d9696;

    .current-time {
        //width: 600px;
        //background: pink;
        color: white;
    }
}
</style>
