<template>
  <div>
    <h1>This is an Appel page</h1>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name : 'Appel',
  mounted(){
    this.setCurrentPage('appel');
    this.setShowBtnPen(false)
  },
  methods: {
    ...mapActions(['setCurrentPage','setShowBtnPen'])
  },
};

</script>

<style>

</style>