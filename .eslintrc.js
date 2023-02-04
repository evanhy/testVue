// .eslintrc.js
module.exports = {
    settings: {
        // @路径引入的文件也需要校验
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
            },
        },
    },
    rules: {
        'import/no-absolute-path': [0], // 关闭不能使用绝对路径导入模块
    },
}
