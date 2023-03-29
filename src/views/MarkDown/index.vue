<script lang="ts" setup>

defineOptions({
    name: "MarkDown"
})


const text = ref(
    `
\`\`\`
123
\`\`\`
    `
)
</script>
<template>
    <div>
        <v-md-editor v-model="text" height="400px"></v-md-editor>
        <v-md-preview :text="text"></v-md-preview>
    </div>
</template>

<style lang="scss">
// scss
</style>