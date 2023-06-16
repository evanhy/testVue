<script setup lang="ts">

defineOptions({
    name: "Message"
})

const show = ref(false)
onMounted(() => {
    show.value = true
})
</script>

<template>
    <transition>
        <div class="p-8" v-show="show">
            <h1 class="text-5xl text-rose-400 mb-3">
                Message
            </h1>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>