/**
 * @file .stylelintrc.js
 * @description stylelint 配置文件
 */

module.exports = {
    extends: [
        '@ecomfe/stylelint-config',
        'stylelint-plugin-stylus/recommended'
    ],
    rules: {
        'rule-empty-line-before': null,
    },
    ignorePatterns: [
        'node_modules/*',
    ],
};
