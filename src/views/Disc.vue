<template>
  <div class="disc">
    <!-- vue welcome -->
    <Welcome v-if="whatsAppShow && !load" />
    <!-- content -->
    <ChatList @show-box="showCard" v-for="(msg,i) in allMessage" :key="i" :message="msg"  />

  </div>
</template>

<script>

import Welcome from '@/components/Welcome.vue';
import ChatList from '@/components/ChatList.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Disc',
  data(){
    return {
      whatsAppShow : true,
    }
  },
  components: {
    Welcome,
    ChatList,
  },
  created(){
    this.hiddenWelcome();
    this.setHeaderType("home");
  },
  mounted(){
    setTimeout(()=>{
      this.setLoad(true)
    },7000);

    this.setCurrentPage('disc')

    this.setShowBtn(true)
  },
  computed: {
    ...mapGetters(['load','allMessage'])
  },
  methods: {
    ...mapActions([
        'setLoad',
        'setCurrentPage',
        'setHeaderType',
        'setShowBtn',
        'setCardBoxData',
        'setShowCardBox'
      ]),
    
    hiddenWelcome(){
      setTimeout(()=>{
        this.whatsAppShow = false
      },6000);
    },

    showCard(message){
      this.setCardBoxData(message)
      this.setShowCardBox(true)
    },
  }
}
</script>
