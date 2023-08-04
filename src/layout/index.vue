<script lang="ts" setup>
import Header from "./Header.vue"

defineOptions({
    name: "EvanLayout",
})
</script>

<template>
    <div class="pt-12">
        <Header></Header>
        <router-view v-slot="{Component}">
            <component :is="Component"></component>
        </router-view>
    </div>
</template>
