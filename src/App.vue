<template>
  <layout>
    <template #header >
      <Header />
    </template>
    <template #content >
      <div class="content">
        <router-view/>
      </div>
    </template>
    <template #button-static >
      <Circle v-if="showBtn" /> 
    </template>
  </layout>
</template>

<script>
import { mapGetters } from 'vuex'

import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Circle from './components/Circle.vue'

export default {
  components : {
    Layout,
    Header,
    Circle
  },
  computed : mapGetters(['showBtn'])
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
