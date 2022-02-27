<template>
  <router-link to="/message" class="row">
    <div class="row__img">
      <img :src="message.image" alt="img-1">
    </div>
    <div class="row__rigth">
      <h1 class="row__title">{{ message.name }}</h1>
      <div class="row__message">
        {{ message.message }}
      </div>
    </div>
    <div class="row__date " :class="message.count > 0 ? 'row__date--green':''">{{ message.time }}</div>
    <div class="row__count" v-if="message.count > 0">{{ message.count }}</div>
  </router-link>
</template>

<script>
export default {
  name : "ChatList",
  props : {
    message : {
      type : Object,
      required : true
    }
  }
}
</script>

<style>

</style>