<template>
  <layout>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div class="content">
        <router-view/>
      </div>
    </template>
    <template #button-static>
      <Circle/> 
    </template>
  </layout>
</template>

<script>

import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Circle from './components/Circle.vue'

export default {
  components : {
    Layout,
    Header,
    Circle
  }
}
</script>

<style lang="scss">
  @import "@/assets/styles/main.scss";
  .nav {

    a {
      font-weight: bold;
    }
  }
</style>
