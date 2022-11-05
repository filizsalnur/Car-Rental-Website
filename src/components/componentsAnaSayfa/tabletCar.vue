<template>
    <div >
    <div class="container"><!--Araba oklar Büyük Ekranlar-->
      <div class="row g-3" style="margin-top:4rem"> 
        <div class="col-6">
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
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div class="text19"><b>En Uygun Fiyatlar</b></div>
              <img src="@/images/AnaSayfa/line2.png" alt="..." style="width:100%">
              <div class="text18">İhtiyacınız olan her yerde, istediğiniz tarih aralığında bütçenize en uygun araçları karşılaştırma imkanı.</div>
            </div>
          </div>
          <div class="row" style="margin-top:3rem">
            <div class="col">
              <div class="text19"><b>Kolay ve Güvenli Kiralama</b></div>
              <img src="@/images/AnaSayfa/line2.png" alt="..." style="width:100%">
              <div class="text18">Kurumsal ve bireysel müşteri memnuniyetine önem veren firmalardan güvenli araç kiralama imkanı.</div>
            </div>
          </div>
          <div class="row" style="margin-top:3em">
            <div class="col">
              <div class="text19"><b>Yüzlerce Marka ve Model</b></div>
              <img src="@/images/AnaSayfa/line2.png" alt="..." style="width:100%">
              <div class="text18">Kurumsal firmalardan, farklı marka ve model araçları listeleme ve kiralama imkanı.</div>
            </div>
          </div>
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



  .text16{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.7vw;/*15pt*/
    color: #2a2a2a;
    text-align: left;
    margin-right: 0.8em;
  
  }
  .text17{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.5vw;/*15pt*/
    color: #4e5e7c;
    text-align: left;
    margin-right: 0.8em;
  
  }
  .text18{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.7vw;/*15pt*/
    color: #2a2a2a;
    text-align: right;
    margin-right: 0.8em;
  
  }
  .text19{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.5vw;/*15pt*/
    color: #4e5e7c;
    text-align: right;
    margin-right: 0.8em;
  
  }
  </style>