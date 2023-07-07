<script lang="ts" setup>

defineOptions({
    name: "Confirm"
})
const show = ref(false)
onMounted(() => {
    show.value = true
})
</script>

<template>
    <transition>
        <div v-show="show" class="p-8">
            <h1 class="text-5xl text-emerald-500 mb-3">
                Confirm
            </h1>
        </div>
    </transition>
</template>