<template>
  <div 
    :style="{backgroundImage : `url(${require('@/assets/img/w-2.png')})`}"
    class="message message--pt"
  >
    
    <div 
      v-for="(msg,i) in chats" 
      :key="i"
      class="chat" 
      :class="msg.name == 'You' ? 'chat--you':''"
      >
      <img v-if="msg.name !== 'You'" src="@/assets/icons/sort_down.svg" alt="">
      <img v-else  src="@/assets/icons/sort_down2.svg" alt="">
      <div class="chat__message">{{ msg.message }}</div>
      <span class="chat__time">{{msg.time}}</span>
    </div>
    
    <div class="message__footer">
      <form>
        <img src="@/assets/icons/happy3.svg" alt="">
        <textarea rows="1" placeholder="Message..."></textarea>
        <img src="@/assets/icons/attach.svg" alt="">
        <img src="@/assets/icons/camera_3.svg" alt="">
      </form>
      <div class="voice">
        <img src="@/assets/icons/microphone.svg">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name : "Message",
  computed : mapGetters(['chats']),
  created(){
    this.setHeaderType('message')
    this.setShowBtn(false)
    this.setShowBtnPen(false)
  },
  methods : {
    ...mapActions(['setHeaderType','setShowBtn','setShowBtnPen'])
  }
}
</script>

<style>

</style>