<template>
  <div class="statut">
    <h1>This is an Staut page</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name : "Statut",
  mounted(){
    this.setCurrentPage('statut')
  },
  methods: {
    ...mapActions(['setCurrentPage'])
  },
}
</script>