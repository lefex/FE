/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        animation: {},
        mHeight: 0,
        mOpacity: 0
    },
    onLoad() {
        this.animation = swan.createAnimation({
            transformOrigin: '0% 50%',
            duration: 500,
            timingFunction: 'ease',
            delay: 0
        });
        console.log(this.animation);
    },
    triggerMask(isShow) {
        this.setData({
            mOpacity: isShow ? 1 : 0,
            mHeight: isShow ? 100 : 0
        })
    },
    triggerSheet(isShow) {
        this.animation.opacity(isShow ? 1 : 0);
        this.animation.translateY(isShow ? -300 : 300).step();
        this.setData({
            animation: this.animation.export()
        });
    },
    show() {
        this.isShow = !this.isShow;
        this.triggerMask(this.isShow);
        this.triggerSheet(this.isShow);
    },
    tapAction() {
        console.log('tap');
        this.show();
        // + 向下移动，-向上移动
    },
    maskAction() {
        this.show();
    }
})
