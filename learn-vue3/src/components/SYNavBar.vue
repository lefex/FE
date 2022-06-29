<template>
    <div class="sy-app__navbar">
        <p class="title">文章列表</p>
    </div>
</template>

<script lang="ts">
export default {
    
}
</script>

<style>
.sy-app__navbar {
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    align-items: center;
    height: 44px;
    width: 100%;
    margin-bottom: 44px;
    background-color: #fff;
    text-align: center;
}

.sy-app__navbar .title {
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
}
</style>