<template>
  <div class="header" :class="headerType == 'message' ? 'header--fixed':''">
    <div class="header__content" v-if="headerType == 'home'">
      <div class="header__logo">WhatsApp</div>
      <div class="header__right">
        <img class="search-img" src="@/assets/icons/search.svg" alt="search-icon">
        <img class="dot-img" src="@/assets/icons/menu_2.svg" alt="dot-icon">
      </div>
    </div>
    <div class="nav" id="nav" v-if="headerType == 'home'">
      <img class="camera-img" src="@/assets/icons/camera_1.svg" alt="phot">
      <ul>
        <li class="nav__link"><router-link to="/">Disc</router-link></li>
        <li class="nav__link"><router-link to="/statut">Statut</router-link></li>
        <li class="nav__link"><router-link to="/appel">Appels</router-link></li>
      </ul>
    </div>
    <router-link to="/" class="header__left" v-if="headerType == 'message'">
      <img src="@/assets/icons/left2.svg" alt="">
    </router-link>
    <div class="header__right" v-if="headerType == 'message'">
      <img src="@/assets/img/img-1.jpg"  alt="">
      <span class="name">Franck Tiomela</span>
      <div class="icons">
        <img class="video" src="@/assets/icons/video_call2.svg" alt="">
        <img class="phone" src="@/assets/icons/phone.svg" alt="">
        <img class="menu" src="@/assets/icons/menu_2.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name : "Header",
  computed : {
    ...mapGetters(['headerType'])
  }
}
</script>

<style>

</style>