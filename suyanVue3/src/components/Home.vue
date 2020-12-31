<template>
  <div class="home-wrap">
    <h1 class="title">前端小课</h1>
    <div class="des">
      <p class="text">帮助10W人入门并进阶前端</p>
      <Des></Des>
    </div>
  </div>
</template>

<script>
import Des from './Des.vue';

export default {
  name: 'Home',
  components: {
    Des
  }
}
</script>

<style scoped>
.home-wrap {
  background-color: #eee;
  min-height: 200px;
  padding: 10px;
}
/deep/ .content {
  font-size: 30px;
}
</style>

<!-- 未使用 deep -->
<style>
.title {
  font-size: 20px;
}
</style>
