<template>
  <layout>
    <template #header >
      <Header />
    </template>
    <template #content >
      <div class="content">

        <router-view/>
        <!-- CardBox -->
        <CardBox  :data="cardBoxData" v-if="showCardBox" />

      </div>
    </template>
    <template #button-static >
      <Circle v-if="showBtn" /> 
      <CirclePen v-if="showBtnPen" />
    </template>
  </layout>
</template>

<script>
import { mapGetters } from 'vuex'

import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Circle from './components/Circle.vue'
import CardBox from './components/CardBox.vue'
import CirclePen from './components/CirclePen.vue'


export default {
  components : {
    Layout,
    Header,
    Circle,
    CardBox,
    CirclePen
  },
  computed : mapGetters(['showBtn','showCardBox','cardBoxData','showBtnPen'])
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
