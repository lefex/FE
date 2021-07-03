<template>
    <div class="header-warp">
        <h1>{{ title }}</h1>
        <p>{{ suTitle }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            title: '和素燕一起学习 vite',
            suTitle: '第 2 课：vite 中使用 ts',
        };
    },
});
</script>