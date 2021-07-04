<template>
    <div class="msg-content-wrap">
        <button @click="increment">+</button>
        <span>{{ count }}</span>
        <button @click="decrement">-</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
})
export default class MsgContent extends Vue {
    // 初始数据可以直接声明为实例的 property
    message: string = 'Hello!'
    count: number = 0;

    // 组件方法也可以直接声明为实例的方法
    increment(): void {
        this.count++;
    }

    decrement(): void {
        this.count--;
    }
}
</script>

<style lang="less">
@main-color: #f56c6c;

.msg-content-wrap {
    margin: 20px 0;
    button {
        display: inline-block;
    }
    span {
        padding: 20px;
        color: @main-color;
    }
}
</style>
