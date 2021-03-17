<template>
    <!-- Component template should contain exactly one root element.  -->
    <div>
        <h1>{{title}}</h1>
        <p class="des">{{des}}</p>
        <el-button type="primary">主要按钮</el-button>
        <sy-info></sy-info>
        <sy-message></sy-message>
    </div>
</template>
<!-- 样式内容 -->
<style>
    h1 {
        color: red;
    }
    .des {
        color: #000;
        font-size: 18px;
    }
</style>
<!-- js内容 -->
<script>
export default {
    data() {
        return {
            title: '和素燕一起学前端',
            des: '本文来源于公众号素燕'
        }
    },
    mounted() {
        this.$log({
            uid: 'suyan'
        });
    }
}
</script>

<style>

</style>