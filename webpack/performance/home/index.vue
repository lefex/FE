<template>
    <!-- Component template should contain exactly one root element.  -->
    <div>
        <h1>{{title}}</h1>
        <p class="des">{{des}}</p>
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
                title: '和素燕一起学 webpack',
                des: '本文来源于公众号素燕'
            }
        }
    }
</script>