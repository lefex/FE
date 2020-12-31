<template>
  <Home class="root"/>
  <SlotCom>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>
  
    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
  
    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </SlotCom>
</template>

<script>
import Home from './components/Home.vue'
import SlotCom from './components/SlotCom.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
.root {
  margin: 20px;
}
  /* 父组件可以修改子组件的布局 */
.home-wrap {
  background-color: #22aa22;
}
.des {
  background-color: #ccc;
}
</style>
