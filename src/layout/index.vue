<script lang="ts" setup>
import Header from "./Header.vue"

defineOptions({
    name: "EvanLayout",
})
</script>

<template>
    <div class="pt-12">
        <Header></Header>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.fade-leave-active, .fade-enter-active {
    transition: all 0.5s ease-out;
}

</style>
