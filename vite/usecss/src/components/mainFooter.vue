<template>
    <div class="footer-wrap">
        <p>{{ des }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            des: '内容由公众号素燕提供',
        };
    },
};
</script>

<style lang="stylus">
.footer-wrap
    background-color #f5f5f5
    padding 20px
    margin 20px
    border-radius 6px
    .des
        color #f5f5f5
</style>