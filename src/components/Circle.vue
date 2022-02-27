<template>
  <div  class="circle">
    <svg  viewBox="0 0 24 24" width="20pt" version="1.1">
      <path style=" stroke:none;fill-rule:nonzero;fill:#FFFFFF;fill-opacity:1;" :d="currentPage.path"/>
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed : {
    ...mapGetters(['currentPage']),
  }
}
</script>

<style>

</style>