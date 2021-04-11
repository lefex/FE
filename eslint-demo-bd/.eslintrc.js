/**
 * @file .eslintrc.js
 * @description eslint 配置文件
 */

module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/vue',
        '@ecomfe/eslint-config/typescript',
    ],
    rules: {
        // Vue 组件需要大写，举例：<Banner/>
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            'registeredComponentsOnly': true,
            'ignores': []
        }],
    },
    ignorePatterns: [
        'node_modules/*',
        '.eslintrc.js',
        '**/*.json'
    ]
};
