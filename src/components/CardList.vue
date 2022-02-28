<template>
  <div class="card-list">
    <div 
      :class="
        type == 'status-title' ? 
          'card-list__img--border' : 
          (type == 'status-vue' ? 
            'card-list__img--border-vue':
            'card-list__img--border-1')"
      class="card-list__img">
      
      <img :src="url" alt="">
    </div>
    <div class="card-list__right">
      <div class="card-list__name">{{title}}</div>
      <div class="card-list__date">{{date}}</div>
      <img 
        v-if="type == 'status-title' " 
        src="@/assets/icons/menu.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name : "CardList",
  props : {
    url : {
      type : String,
      default : "empty"
    },
    type : {
      type : String,
      default : "empty"
    },
    date : {
      type : String,
      default : "empty"
    },
    title : {
      type : String,
      default : "empty"
    }
  },
  mounted(){
    console.log(typeof this.url)
  }
}
</script>
