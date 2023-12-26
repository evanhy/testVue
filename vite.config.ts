import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import type {ConfigEnv} from 'vite'
import {defineConfig, loadEnv} from 'vite'
// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())
    return {
        base: './',
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
            extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
        },

        /* more config */
        plugins: [
            vue(),
            AutoImport({
                resolvers: [],
                // 自定引入 Vue VueRouter API,如果还需要其他的可以自行引入
                imports: ['vue', 'vue-router'],
                // 调整自动引入的文件位置
                dts: 'src/type/auto-import.d.ts',
                // 解决自动引入eslint报错问题 需要在eslintrc的extend选项中引入
                eslintrc: {
                    enabled: true,
                    // 配置文件的位置
                    filepath: './.eslintrc-auto-import.json',
                    globalsPropValue: true,
                },
            }),
            Components({
                resolvers: [
                    // 需要自动导入的组件
                    ElementPlusResolver()
                ],
                dts: 'src/type/components.d.ts',
            }),
        ],
        server: {
            // 是否开启 https
            https: false,
            // 端口号
            port: 8060,
            // 监听所有地址
            host: '0.0.0.0',
            // 服务启动时是否自动打开浏览器
            open: true,
            // 允许跨域
            cors: true,
            // 自定义代理规则
            proxy: {
                '/api': {
                    target: 'http://pcapi-xiaotuxian-front.itheima.net/',
                    ws: true,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '')
                }
            },
        },
        build: {
            // 设置最终构建的浏览器兼容目标
            target: 'es2015',
            // 构建后是否生成 source map 文件
            sourcemap: false,
            //  chunk 大小警告的限制（以 kbs 为单位）
            chunkSizeWarningLimit: 2000,
            // 启用/禁用 gzip 压缩大小报告
            reportCompressedSize: false,
        },
    }
})
/* export default defineConfig({
    base: './',
    plugins: [vue(), defineOptions()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    server: {
        // 是否开启 https
        https: false,
        // 端口号
        port: 3000,
        // 监听所有地址
        host: '0.0.0.0',
        // 服务启动时是否自动打开浏览器
        open: true,
        // 允许跨域
        cors: true,
        // 自定义代理规则
        proxy: {},
    },
    build: {
        // 设置最终构建的浏览器兼容目标
        target: 'es2015',
        // 构建后是否生成 source map 文件
        sourcemap: false,
        //  chunk 大小警告的限制（以 kbs 为单位）
        chunkSizeWarningLimit: 2000,
        // 启用/禁用 gzip 压缩大小报告
        reportCompressedSize: false,
    },
})
 */
