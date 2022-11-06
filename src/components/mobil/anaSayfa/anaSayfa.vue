<template>
<aracBul/>
<havalimanları/>
<lokasyonlar/>
<car/>
<aciklama/>

<mobileFooter/>
  </template>
  
  <script >
  import havalimanları from './companents/havalimanları.vue'
  import aracBul from './companents/aracBul.vue'
  import lokasyonlar from './companents/lokasyonlar.vue'
  import car from './companents/car.vue'
  import aciklama from './companents/aciklama.vue'
  import mobileFooter from './companents/footer.vue'

  export default {
    name: "AnaSayfa",
    components: {
        havalimanları,
        lokasyonlar,
        car,
        aracBul,
        aciklama,
        mobileFooter,
    },
    data() {
      return {
        
      }
    },
   
  
  }
  </script>
  
  <style scoped>

  </style>