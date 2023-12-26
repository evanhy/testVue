<script lang="ts" setup>

defineOptions({
    name: "PageButton"
})

const show = ref(false)
onMounted(() => {
    show.value = true
})
</script>
<template>
    <Transition>
        <div v-show="show" class="p-8">
            <h1 class="text-5xl text-blue-400 mb-3">Button</h1>
            <p class="text-2xl my-3">Type</p>
            <evan-button type="primary">
                Primary
            </evan-button>
            <evan-button type="gray">
                Success
            </evan-button>
            <evan-button type="plain">
                Plain
            </evan-button>
            <evan-button type="default">
                Default
            </evan-button>
            <p class="text-2xl my-3">Size</p>
            <evan-button size="mini" type="primary">
                mini
            </evan-button>
            <evan-button size="small" type="primary">
                small
            </evan-button>
            <evan-button size="middle" type="primary">
                middle
            </evan-button>
            <evan-button size="large">
                large
            </evan-button>
            <evan-button>
                Default
            </evan-button>
        </div>
    </Transition>
</template>
<style scoped>
button {
    margin-left: 10px;
}
</style>
