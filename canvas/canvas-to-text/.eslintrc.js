
/**
 * @file .eslintrc.js
 * @author suyan wang
 * @description eslint config file
 */

module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript'
    ],
    rules: {
        "comma-dangle": ["error", "never"]
    },
    ignorePatterns: [
        'node_modules/*',
        '.eslintrc.js',
        'dist/*',
        'examples/axios/*'
    ]
};