<template>
  <div class="row">
    <div class="row__img">
      <img @click="showBox(message)" v-if="message.name == 'Ariana 😍'" src="@/assets/img/img-4.jpg" alt="img-1">
      <img @click="showBox(message)" v-else :src="message.image" alt="img-1">
    </div>
    <router-link to="/message" class="row__rigth">
      <h1 class="row__title">{{ message.name }}</h1>
      <div class="row__message">
        {{ message.message }}
      </div>
    </router-link>
    <div class="row__date " :class="message.count > 0 ? 'row__date--green':''">{{ message.time }}</div>
    <div class="row__count" v-if="message.count > 0">{{ message.count }}</div>
  </div>
</template>

<script>
export default {
  name : "ChatList",
  props : {
    message : {
      type : Object,
      required : true
    }
  },
  methods: {
    showBox(message){
      this.$emit('show-box',message);
    }
  },
}
</script>

<style>

</style>