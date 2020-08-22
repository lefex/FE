/**
 * @file inquirer.js
 * @author 公众号素燕
 * @description 输入选择
 */

const inquirer = require('inquirer');

module.exports = {
    askCreateAppName: () => {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: 'Enter app name:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a app name.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    }
}