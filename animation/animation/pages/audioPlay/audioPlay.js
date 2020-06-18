/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        audios: [1, 2, 3, 4]
    },
    onLoad() {
        this.animation = swan.createAnimation({
            transformOrigin: '0% 50%',
            duration: 500,
            timingFunction: 'ease',
            delay: 0
        });
        console.log(this.animation);
    }
})
