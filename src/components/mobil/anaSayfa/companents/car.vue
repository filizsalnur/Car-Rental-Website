<template>
    <div class="center">
    <div class="container" style="margin-top:5vw"><!--Araba oklar Büyük Ekranlar-->

    
          <div class="row">
            <div class="col">
              <div class="text17"><b>Ön Ödeme İmkanı</b></div>
              <img src="@/images/AnaSayfa/line1.png" alt="..." style="width:100%">
              <div class="text16">Rezervasyon işlemlerinde ücretin ufak bir kısmını ödeyebilir, kalan ücreti aracınızı teslim alırken ödeyebilirsiniz.</div>
            </div>
          </div>
          <div class="row" style="margin-top:3rem">
            <div class="col">
              <div class="text17"><b>Ücretsiz İptal Garantisi</b></div>
              <img src="@/images/AnaSayfa/line1.png" alt="..." style="width:100%">
              <div class="text16">Rezervasyon işlemlerinde ücretin ufak bir kısmını ödeyebilir, kalan ücreti aracınızı teslim alırken ödeyebilirsiniz.</div>
            </div>
          </div>
          <div class="row" style="margin-top:3rem">
            <div class="col">
              <div class="text17"><b>7/24 Misafir Hizmetleri</b></div>
              <img src="@/images/AnaSayfa/line1.png" alt="..." style="width:100%">
              <div class="text16">Tüm rezervasyon işlemlerinizde misafir hizmetleri ekibimiz 7/24 hizmetinizde.</div>
            </div>
          </div>
        
        

    </div><!--Araba oklar bitiş-->
  </div>

  
  </template>
  
  <script >
  export default {
    name: "deskopCar",
    components: {

  
    },
    data() {
      return {
      
      }
    },

    methods: {

  
    },
  }
  </script>
  
  <style scoped>


.center{
  margin:0 auto;
  width: 90%;/*1220px*/
  z-index: 4;
  position: relative;
  align-items: center;
}
  .text16{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 3vw;/*15pt*/
    color: #2a2a2a;
    text-align: left;
    margin-right: 0.8em;
  
  }
  .text17{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 4vw;/*15pt*/
    color: #4e5e7c;
    text-align: left;
    margin-right: 0.8em;
  
  }

  </style>