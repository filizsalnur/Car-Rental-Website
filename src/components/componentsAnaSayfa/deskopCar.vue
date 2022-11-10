<template>
    <div class="center" style="margin-bottom:5vh">
    <div class="container"><!--Araba oklar Büyük Ekranlar-->
      <div class="row g-0" style="margin-top:4rem"> 
        <div class="col-4">
          <div class="row" style="margin-top:15px">
            <div class="col">
              <div class="text17"><b>Ön Ödeme İmkanı</b></div>
              <img src="@/images/AnaSayfa/line1.png" alt="..." style="width:100%">
              <div class="text16">Rezervasyon işlemlerinde ücretin ufak bir kısmını ödeyebilir, kalan ücreti aracınızı teslim alırken ödeyebilirsiniz.</div>
            </div>
          </div>
          <div class="row" style="margin-top:6rem">
            <div class="col">
              <div class="text17"><b>Ücretsiz İptal Garantisi</b></div>
              <img src="@/images/AnaSayfa/line1.png" alt="..." style="width:100%">
              <div class="text16">Rezervasyon işlemlerinde ücretin ufak bir kısmını ödeyebilir, kalan ücreti aracınızı teslim alırken ödeyebilirsiniz.</div>
            </div>
          </div>
          <div class="row" style="margin-top:6rem">
            <div class="col">
              <div class="text17"><b>7/24 Misafir Hizmetleri</b></div>
              <img src="@/images/AnaSayfa/line1.png" alt="..." style="width:100%">
              <div class="text16">Tüm rezervasyon işlemlerinizde misafir hizmetleri ekibimiz 7/24 hizmetinizde.</div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <img src="@/images/AnaSayfa/car2.png" alt="...">
        </div>
        <div class="col-4">
          <div class="row" style="margin-top:15px">
            <div class="col">
              <div class="text19"><b>En Uygun Fiyatlar</b></div>
              <img src="@/images/AnaSayfa/line2.png" alt="..." style="width:100%">
              <div class="text18">İhtiyacınız olan her yerde, istediğiniz tarih aralığında bütçenize en uygun araçları karşılaştırma imkanı.</div>
            </div>
          </div>
          <div class="row" style="margin-top:6rem">
            <div class="col">
              <div class="text19"><b>Kolay ve Güvenli Kiralama</b></div>
              <img src="@/images/AnaSayfa/line2.png" alt="..." style="width:100%">
              <div class="text18">Kurumsal ve bireysel müşteri memnuniyetine önem veren firmalardan güvenli araç kiralama imkanı.</div>
            </div>
          </div>
          <div class="row" style="margin-top:6rem">
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
  .background{
    background: url("@/images/AnaSayfa/background.png") ;
    background-repeat: no-repeat;
    background-size:cover;
    height: 99.06166219839142vh;/*739px*/
    width:  257.372654155496vh;/*1920px*/
    z-index: 1;
    position:absolute;
    overflow: hidden;
  }
  .center{
  margin:0 auto;
  width: 60%;/*1220px*/
  z-index: 2;
  position: relative;
  align-items: center;
}
  .nav-left{
    margin-left: 0;
    left:0 ;
    position: relative; 
    float: left;
    margin-bottom: 0;
  }
  .text1{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.5vw;/*60pt*/
    color: #ffffff;
    text-align: left;
    padding-top: 100px;
  
  }
  .text2{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 5vw; /*60pt*/
    color: #ffffff;
    text-align: left;
    line-height: 4vw;
  
  }
  .text3{
    position: relative;
    font-family: "PoppinsBold" ;
    font-size: 1.3vw;
    color: #ffffff;
    text-align: left;
    padding-top: 35px;
  
  }
  .text4{
    padding-left: 28px;
    text-align: left;
    position: relative; 
  
  }
  .text5{
    padding-left: 28px;
  
  }
  .text6{
    margin-top:20px;
    padding-left: 10px;
    color: #ffffff;
    position: relative; 
    float: left;
  
  }
  .text7{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 19pt;
    color: #2a2a2a;
    margin-top: 30px;
    float: left;
  
  }
  .text8{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.7vw;/*20pt*/
    color: #ffffff;
    text-align: left;
    margin-left: 3vw;/*75pt*/
    margin-top:70px;
  
  }
  .text9{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.8vw;/*15pt*/
    color: #ffffff;
    text-align: left;
    margin-left: 3vw;/*75pt*/
    margin-top:0px;
  
  }
  .text10{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.6vw;/*15pt*/
    color: #2a2a2a;
    text-align: right;
    margin-right: 0.8em;
    line-height: 1rem;
  
  }
  .text11{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.25vw;/*15pt*/
    color: #ffffff;
    text-align: right;
    margin-right: 0.8em;
    line-height: 1rem;
  }
  .text12{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.6vw;/*15pt*/
    color: #ffffff;
    text-align: right;
    margin-right: 0.8em;
  }
  .text13{
    font-family: "Quicksand" ;
    font-size: 1vw;/*15pt*/
    color: #7a7a7a;
    text-align: left;
    margin-left: 3rem;
    margin-top: 1rem;
    padding-top: 1rem;
    line-height: 0.1vw;
    top:0;
  }
  .text14{
    position: relative;
    font-family: "PoppinsBold" ;
    font-size: 0.75vw;/*15pt*/
    color: #2a2a2a;
    text-align: left;
    margin-left: 3rem;
    margin-top:0.25rem ;
    
  }
  .text15{
    position: relative;
    font-family: "PoppinsBold" ;
    font-size: 0.75vw;/*15pt*/
    color: #2a2a2a;
    text-align: right;
    margin-right: 0.2rem;
    margin-top:0.25rem ;
    line-height: 0.50rem;
  }
  .text16{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.65vw;/*15pt*/
    color: #2a2a2a;
    text-align: left;
    margin-right: 0.8em;
  
  }
  .text17{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.25vw;/*15pt*/
    color: #4e5e7c;
    text-align: left;
    margin-right: 0.8em;
  
  }
  .text18{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.65vw;/*15pt*/
    color: #2a2a2a;
    text-align: right;
    margin-right: 0.8em;
  
  }
  .text19{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.25vw;/*15pt*/
    color: #4e5e7c;
    text-align: right;
    margin-right: 0.8em;
  
  }
  .text20{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1.25vw;/*15pt*/
    color: #4e5e7c;
    text-align: right;
    margin-right: 0.8em;
  
  }
  .text21{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1vw;/*15pt*/
    color: #2a2a2a;
    text-align: center;
  }
  .text22{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.9vw;/*15pt*/
    color: #0e3784;
    text-decoration: underline;
  }
  .button1 {
    height: 2.5em; /*40px*/
    width : 10.125em;/*162px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 0.9rem;/*11pt*/
    margin-right: 6px;/*6px*/
    margin-top: 18px;/*18px*/
    border-radius: 8px;
  
  }
  .button2 {
    height: 2.5em; /*40px*/
    width : 10.125em;/*162px*/
    background-color: #25459a;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 0.9rem;/*11pt*/
    margin-top: 18px;/*18px*/
    border-radius: 8px;
  
  }
  .button3 {
    height: 59px;/*59px*/
    width : 25.75rem;/*594px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 14pt;
    margin-top: 6px;/*6px*/
    border-radius: 8px;
  
  }
  .button4 {
    height: 59px;/*59px*/
    width : 15rem;/*349px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    margin-top: 6px;/*6px*/
    border-radius: 8px;
    float:left;
  
  }
  .button5 {
    height: 59px;/*59px*/
    width : 180px;/*200px*/
    float:right;
    background-color: #e51c3d;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    margin-top: 6px;/*6px*/
    margin-left:15px;/*15px*/
    border-radius: 8px;
  
  }
  .button6 {
    height: 18px;/*18px*/
    width : 190px;/*174px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    margin: 0 auto;
    font-family: "Quicksand" ;
    font-size: 0.9em;/*11pt*/
    margin-top: 6px;/*6px*/
    border-radius: 8px;
  
  }
  .button7 {
    height: 2.125em;/*34px*/
    width : 7.875em;/*126px*/
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
    font-family: "Quicksand" ;
    font-size: 0,6669vw;
    float: right;
    margin-right: 0.8em;
    margin-top: 1em;
    border-radius: 3px;
  }
  
  .space1 {
    height: 306px;/*306px*/
    width : 100%;/*1220px*/
    background-color: #25459a;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    border-radius: 8px;
    bottom: unset;
    position: absolute;
    top: 45px;/*45px*/
    z-index: 1;
  }
  .space2 {
    height: 200px;/*200px*/
    width : 100%;/*1220px*/
  
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    margin-top: 30px;/*30px*/
    margin-bottom: 100px;/*100px*/
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size:cover;
    position: relative;
  }
  .space3 {
    height: 200px;/*200px*/
    width : 100%;/*1928px*/
    background-color: #e6ecf8;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    border-radius: 8px;
    position: relative;
    top: 45px;/*45px*/
  
  }
  .image{
    background: url("@/images/AnaSayfa/background.png") ;
    background-repeat: no-repeat;
    background-size:cover;
    height: 739px;/*739px*/
    width: 1920px;/*1920px*/
    
  }
  .image2 {
    margin-top: 4em;/*50px*/
  
  }
  .icon{
    margin-left: 72px;/*72px*/
    position: relative; 
    float: left;
    margin-top: 0;
    top: 0;
    line-height: 0;
  }
  .icon2{
      left: 380px;/*380px*/
    position: absolute;
    z-index: 2;
  }
  .icon3{
    margin-left: 16vw;/*200px*/
    position: relative; 
    float:left;
    margin-top: 4vw;/*60px*/
  }
  .icon4{
    margin-left: 4;/*200px*/
    position: relative; 
    float:left;
    width: 60%;
    margin-top: 4px;/*60px*/
  }
  
  @media (min-width: 761px) {
    .show-on-mobile { display: none !important; }
  
  }
  @media (max-width: 760px) and (min-width:991px) {
    .show-on-tablet { display: none !important; }
  
  }
  @media (max-width: 992px) {
    .show-on-desktop { display: none !important; }
   
  }
  </style>