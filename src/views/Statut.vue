<template>
  <div class="statut">
    <!-- statut title -->
    <CardList 
      url  = "https://i.pinimg.com/736x/a1/65/87/a1658745abf0e70d11a7eacffb5bce81.jpg"
      date = "Ajoud'hui a 14:00"
      title="Mon statut" 
      type="status-title" />

    <!-- status list -->
    <div class="statut__list-title">
      Récentes mises à jour
    </div>

    <div class="statut__list">

      <CardList 
        title = "Joyce"
        url   = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_rc9vTSjWvGVp3saA3GYv-CbxrzkaGWLog&usqp=CAU"
        date  = "Ajoud'hui a 00:10"
        type  = "status" />

      <CardList 
        title="Willy"
        url  = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafWQIZzrZ7rUXOfU4nz-kosFYQdqU2pFdrQ&usqp=CAU"
        date = "Hier à 23:20"
        type ="status" />

      <CardList 
        title = "Mtpd_Amarion_#MAL"
        url   = "https://img.nrj.fr/4tlIxJY07ymsgvc6fCB_YT7tNdA=/800x450/smart/medias%2F2020%2F10%2Fderulo_5f91b1167ea67.jpg"
        date  = "Hier à 20:10"
        type  = "status" />

      <CardList 
        title = "Djatsa Dev"
        url   = "https://img.igen.fr/2016/6/macgpic-1465713146-44350573818694-sc-jpt.jpg"
        date  = "Hier à 14:05"
        type  = "status" />

    </div>

    <!-- status list -->
    <div class="statut__list-title">
      Mise à jour vues
    </div>

    <div class="statut__list">
      <CardList 
        title = "Mandikou Ami Dev"
        url   = "https://i.pinimg.com/originals/3c/65/f1/3c65f1046fa7e54afe0a72e834dac405.jpg"
        date  = "Hier à 21:45"
        type  = "status-vue" />
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

import CardList from '@/components/CardList';

export default {
  name : "Statut",
  components : {
    CardList
  },
  mounted(){
    this.setCurrentPage('statut');
    this.setShowBtnPen(true);
    this.setShowBtn(true);
  },
  methods: {
    ...mapActions(['setCurrentPage','setShowBtnPen','setShowBtn'])
  },
}
</script>