<script lang="ts" setup>
defineOptions({
    name: "Components"
});

const components = [
    {
        name: "Button",
        path: "/components/button",
    },
    {
        name: "Confirm",
        path: "/components/confirm",
    },
    {
        name: "Message",
        path: "/components/message",
    },
];

</script>
<template>
    <div class="my_components">
        <header>
            <router-link class="back" to="/">Back</router-link>
        </header>
        <div class="container">
            <ul>
                <li v-for="item in components" :key="item.name">
                    <a-link :to="item.path">{{ item.name }}</a-link>
                </li>
            </ul>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
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
            height: calc(100vh - 100px);
            background-color: #e6f7ff;

            li {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f5f5f5;
                border-bottom: 1px solid #e6e6e6;
                padding: 0 20px;

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

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
}

</style>