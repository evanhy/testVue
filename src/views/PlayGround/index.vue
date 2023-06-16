<template>
    <div class="play-ground">
        <div class=" md:mx-auto relative bg-white overflow-hidden border-b">
            <div class="h-12 md:ml-10 md:pr-4 md:space-x-8 flex justify-center ">
                <router-link
                    class="font-medium text-gray-500 hover:text-gray-900 flex items-center"
                    to="/">Home
                </router-link>
                <router-link
                    class="font-medium text-gray-500 hover:text-gray-900 flex items-center"
                    to="/video" exact>Video
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">

defineOptions({
    name: "PlayGround"
})
</script>
<style lang="scss" scoped>
.play-ground {
    font-size: 18px;
}
</style>