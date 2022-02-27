<template>
  <div class="disc">
    <!-- vue welcome -->
    <Welcome v-if="show && !load" />
    <!-- content -->
    <ChatList v-for="(msg,i) in allMessage" :key="i" :message="msg"  />
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
      show : true
    }
  },
  components: {
    Welcome,
    ChatList
  },
  created(){
    this.hiddenWelcome();
    this.setHeaderType("home");
  },
  mounted(){
    setTimeout(()=>{
      this.setLoad(true)
    },2000);
    this.setCurrentPage('disc')
  },
  computed: {
    ...mapGetters(['load','allMessage'])
  },
  methods: {
    ...mapActions(['setLoad','setCurrentPage','setHeaderType']),
    hiddenWelcome(){
      setTimeout(()=>{
        this.show = false
      },1000);
    }
  }
}
</script>
