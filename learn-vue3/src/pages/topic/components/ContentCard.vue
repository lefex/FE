<template>
    <div v-for="article in articleList" class="content-card">
        <div class="cover">{{ article.coverTitle }}</div>
        <p class="title">{{ article.title }}</p>
        <p class="detail">{{ article.detail }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { articleList } from './data';

export default defineComponent({
    data() {
        return {
            articleList: articleList
        }
    }
});

</script>

<style>
.content-card {
    background-color: #fff;
    margin: 10px 12px;
    border-radius: 6px;
}

.content-card .cover {
    background-color: #222;
    color: #fff;
    font-weight: 600;
    height: 120px;
    line-height: 120px;
    text-align: center;
    font-size: 24px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.content-card .title {
    margin-top: 10px;
    padding: 0 10px;
    font-size: 16px;
}

.content-card .detail {
    margin-top: 10px;
    padding: 0 10px 10px 10px;
    color: #666;
}
</style>