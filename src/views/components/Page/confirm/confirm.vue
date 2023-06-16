<script setup lang="ts">

defineOptions({
    name: "Confirm"
})
const show = ref(false)
onMounted(() => {
    show.value = true
})
</script>

<template>
    <transition name="fade">
        <div class="p-8" v-show="show">
            <h1 class="text-5xl text-emerald-500 mb-3">
                Confirm
            </h1>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>