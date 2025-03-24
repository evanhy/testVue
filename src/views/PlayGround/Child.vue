<script lang="ts" setup>
defineOptions({
    name: "Child"
})

const value = defineModel({
    default: "123",
    required: true,
    type: String,
    validator: (val: string) => {
        return val.length > 0
    },
    get: (val: string) => {
        return val
    },
    set: (val: string) => {
        return val
    },
})
</script>

<template>

</template>

<style scoped>

</style>