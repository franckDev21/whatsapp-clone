<template>
  <div class="card-box">
    <div 
      :style="{backgroundImage : `url(${require('@/assets/img/img-4.jpg')})`}"
      class="card-box__content" >
      <div class="card-box__name">Author name</div>
      <div class="card-box__footer">
        <img src="@/assets/icons/comments_2.svg" alt="">
        <img src="@/assets/icons/phone.svg" alt="">
        <img src="@/assets/icons/video_call.svg" alt="">
        <img src="@/assets/icons/phone.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "cardBox"
}
</script>

<style>

</style>