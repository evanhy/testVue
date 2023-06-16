<script setup lang="ts">
defineOptions({
    name: "Components"
});
</script>
<template>
    <div class="my_components">
        <header>
            <router-link to="/" class="back">Back</router-link>
        </header>
        <div class="container">
            <ul>
                <li>
                    <router-link to="/components/button">Button</router-link>
                </li>
                <li>
                    <router-link to="/components/confirm">Confirm</router-link>
                </li>
                <li>
                    <router-link to="/components/message">Message</router-link>
                </li>
            </ul>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.my_components {
    .router-link-exact-active {
        color: #1f6bdf;
    }

    header {
        height: 50px;
        line-height: 50px;
        padding: 0 50px;
        background-color: #fff;
        border-bottom: 1px solid #e6e6e6;

        .back {
            color: #8c8c8c;

            &:hover {
                color: #1f6bdf;
            }
        }
    }

    .container {
        display: flex;

        ul {
            width: 200px;
            height: calc(100vh - 50px);
            background-color: #e6f7ff;

            li {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f5f5f5;
                border-bottom: 1px solid #e6e6e6;

                &:hover {
                    background-color: #e6f7ff;
                }
            }
        }

        .main {
            flex: 1;
            height: 100%;
            background-color: #fff;
        }
    }
}

</style>