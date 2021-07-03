<template>
    <div class="header-warp">
        <h1>{{ title }}</h1>
        <p>{{ suTitle }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '和素燕一起学习 vite',
            suTitle: '第 1 课：vite 中使用 vue2',
        };
    },
};
</script>