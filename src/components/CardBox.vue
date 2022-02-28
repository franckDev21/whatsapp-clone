<template>
  <div @click.prevent.stop="hideBox" class="card-box">
    <div @click.stop="$event.stopPropagation()" class="card-box__content" >
      <div class="card-box__name">{{data.name}}</div>
      <div 
        :style="{backgroundImage : `url(${data.image})`}"
        class="card-box__img"></div>
      <div class="card-box__footer">
        <img src="@/assets/icons/comments_w.svg" alt="">
        <img src="@/assets/icons/phone_w.svg" alt="">
        <img src="@/assets/icons/video_call_w.svg" alt="">
        <img src="@/assets/icons/info.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name : "cardBox",
  props: {
    data : {
      type : Object,
      required : true
    } 
  },
  methods: {
    ...mapActions(['setShowCardBox','setCardBoxData']),

    hideBox(){
      this.setShowCardBox(false);
      this.setCardBoxData({})
    }
  },
}
</script>

<style>

</style>