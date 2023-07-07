<script lang="ts" setup>

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
        <div v-show="show" class="p-8">
            <h1 class="text-5xl text-rose-400 mb-3">
                Message
            </h1>
        </div>
    </transition>
</template>