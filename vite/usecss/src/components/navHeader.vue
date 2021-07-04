<template>
    <div class="header-warp">
        <h1 class="title">{{ title }}</h1>
        <p class="subTitle">{{ subTitle }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '和素燕一起学习 vite',
            subTitle: '第 3 课：使用 css 样式',
        };
    },
};
</script>

<style lang="less">
.header-warp {
    text-align: center;
    .title {
        color: green;
    }
    .subTitle {
        color: red;
        font-size: 24px;
    }
}
</style>