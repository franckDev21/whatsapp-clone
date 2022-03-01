<template>
  <div class="appel">
    <div class="appel__list"> 
      <card-list  
        title = "Mr Leo"
        url   = "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/actu/medias/le-roi-du-netflix-africain-vise-cinq-millions-d-abonnes-1012159/14340457-1-fre-FR/Le-roi-du-Netflix-africain-vise-cinq-millions-d-abonnes.jpg"
        date  = "Hier à 21:45"
        type  = "appel" >
        <svg  width="14pt" height="14pt" viewBox="0 0 32 32" version="1.1">
          <path style=" stroke:none;fill-rule:nonzero;fill:#2C8383;fill-opacity:1;" d="M 13 6 L 13 8 L 22.5625 8 L 6.28125 24.28125 L 7.71875 25.71875 L 24 9.4375 L 24 19 L 26 19 L 26 6 Z "/>
        </svg>
        </card-list>

        
      <card-list 
        title = "Linda"
        url   = "https://static.vecteezy.com/ti/photos-gratuite/p1/877093-mignon-afro-americain-femme-un-clin-de-oeil-photo.jpg"
        date  = "26 Février à 23:51"
        type  = "appel-video" >
          <svg  width="14pt" height="14pt" viewBox="0 0 32 32" version="1.1">
            <path style=" stroke:none;fill-rule:nonzero;fill:#ee1155;fill-opacity:1;" d="M 24.28125 6.28125 L 8 22.5625 L 8 13 L 6 13 L 6 26 L 19 26 L 19 24 L 9.4375 24 L 25.71875 7.71875 Z "/>
          </svg>
        </card-list>

      <card-list  
        title = "Steve jobs"
        url   = "https://www.243tech.com/ce-que-je-retiens-du-discours-de-steve-jobs-aux-etudiants-de-stanford/steve_jobs.jpg"
        date  = "20 Février à 6:02"
        type  = "appel-video" >
          <svg  width="14pt" height="14pt" viewBox="0 0 32 32" version="1.1">
            <path style=" stroke:none;fill-rule:nonzero;fill:#2C8383;fill-opacity:1;" d="M 24.28125 6.28125 L 8 22.5625 L 8 13 L 6 13 L 6 26 L 19 26 L 19 24 L 9.4375 24 L 25.71875 7.71875 Z "/>
          </svg>
      </card-list>
      
      <card-list  
        title = "Aboubakar vincent"
        url   = "https://footazimuts.com/wp-content/uploads/2020/12/IMG-20201225-WA0282.jpg"
        date  = "19 Février à 18:31"
        type  = "appel" >
          <svg  width="14pt" height="14pt" viewBox="0 0 32 32" version="1.1">
            <path style=" stroke:none;fill-rule:nonzero;fill:#ee1155;fill-opacity:1;" d="M 24.28125 6.28125 L 8 22.5625 L 8 13 L 6 13 L 6 26 L 19 26 L 19 24 L 9.4375 24 L 25.71875 7.71875 Z "/>
          </svg>
        </card-list>
      
      <card-list  
        title = "Ariana grande"
        url   = "https://numero.twic.pics/2020-10/thumb-cover-ariana-grande-nouvel-album-studio-AG6-rain-on-me-stuck-with-u-lady-gaga-justin-bierber-vmas-awards-numero-magazine.jpg"
        date  = "14 Février à 20:00"
        type  = "appel-video" >
        <svg  width="14pt" height="14pt" viewBox="0 0 32 32" version="1.1">
          <path style=" stroke:none;fill-rule:nonzero;fill:#2C8383;fill-opacity:1;" d="M 13 6 L 13 8 L 22.5625 8 L 6.28125 24.28125 L 7.71875 25.71875 L 24 9.4375 L 24 19 L 26 19 L 26 6 Z "/>
        </svg>
      </card-list>

      <card-list  
        title = "Elon musk"
        url   = "https://www.financialafrik.com/wp-content/uploads/2021/01/Elon-musk-plus-riche-du-monde-pandemique.jpg"
        date  = "Hier à 21:45"
        type  = "appel" >
        <svg  width="14pt" height="14pt" viewBox="0 0 32 32" version="1.1">
          <path style=" stroke:none;fill-rule:nonzero;fill:#2C8383;fill-opacity:1;" d="M 24.28125 6.28125 L 8 22.5625 L 8 13 L 6 13 L 6 26 L 19 26 L 19 24 L 9.4375 24 L 25.71875 7.71875 Z "/>
        </svg>
      </card-list>
      
      <card-list  
        title = "vladimir putin"
        url   = "https://www.deccanherald.com/sites/dh/files/articleimages/2020/06/21/Putin-1592743685.jpg"
        date  = "Hier à 21:45"
        type  = "appel" >
        <svg  width="14pt" height="14pt" viewBox="0 0 32 32" version="1.1">
            <path style=" stroke:none;fill-rule:nonzero;fill:#ee1155;fill-opacity:1;" d="M 24.28125 6.28125 L 8 22.5625 L 8 13 L 6 13 L 6 26 L 19 26 L 19 24 L 9.4375 24 L 25.71875 7.71875 Z "/>
          </svg>
      </card-list>

    </div> 
  </div>
</template>

<script>

import { mapActions } from 'vuex';

import CardList from '@/components/CardList';

export default {
  name : 'Appel',
  components : {
    CardList
  },
  mounted(){
    this.setCurrentPage('appel');
    this.setShowBtnPen(false);
    this.setShowBtn(true);
  },
  methods: {
    ...mapActions(['setCurrentPage','setShowBtnPen','setShowBtn'])
  },
};

</script>

<style>

</style>