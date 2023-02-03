import {defineConfig} from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), DefineOptions()],
    // 别名配置
    resolve: {
        alias: {
            // 键必须以斜线开始和结束
            '@': path.resolve(__dirname, './src'),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@common": path.resolve(__dirname, "./src/common"),
            "@interface": path.resolve(__dirname, "./src/interface"),
            "@plugins": path.resolve(__dirname, "./src/plugins"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@views": path.resolve(__dirname, "./src/views"),
        },
    },
    server: {// 环境配置
        port: 9090,
        open: true, //配置自动启动浏览器
    },
})