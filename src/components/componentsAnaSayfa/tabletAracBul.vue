<template>

  <div class="background"></div>
  <div class="center"> <!--Ana Sayfanın kenar kısıtlamlarını belirler-->
  
    <div class="text1">SENİN İÇİN EN UYGUN ARACI</div>
    <div class="text2">ara, bul ve kirala</div>
    <div class="text3">En uygun fiyat garantisi ile ister online öde, ister aracı teslim alırken öde!</div>
  
  <!--Uygun araç bul-->
  
    <div class="container" style="border:0px;margin:0px;">
      <div class="row g-1" v-if="kiralaController==false">
      <div class="col">
        <div class="nav-left">
        <button class="button1">Günlük Kiralama</button>
        <button class="button2" @click="kiralaController=true">Aylık Kiralama</button>
      </div>
      </div>
    </div>
    <div class="row g-1" v-if="kiralaController==true">
      <div class="col">
        <div class="nav-left">
        <button class="button2" @click="kiralaController=false">Günlük Kiralama</button>
        <button class="button1" >Aylık Kiralama</button>
      </div>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row g-1">
      <div class="col" v-if="kiralaController==false">
        <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon"> 
      </div>
      <div class="col" v-if="kiralaController==true">
        <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon2"> 
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row g-0">
      <div class="col-12">
        <div class="nav-left">
        <button class="button3" @click="aramaBariController=!aramaBariController"><div class="text4"> <img src="@/images/AnaSayfa/BlueIcon.png" alt="icon"> Nereden Alacaksınız?</div></button>
        </div>
        <div v-if="aramaBariController==true"><aramaBari/></div>
      </div>
        
      </div>
        <div class="row g-0">
      <div class="col-12">
        <div class="nav-left">
        <div v-if="checkerForm==true">
          <div v-if="aramaBari2Controller==true" style="margin-top:1vh"><aramaBari/></div>  
        <button class="button3" @click="aramaBari2Controller=!aramaBari2Controller"><div class="text4"> <img src="@/images/AnaSayfa/RedIcon.png" alt="icon"> Nerede Bırakacaksınız?</div></button>
  
      </div>
      </div>
      </div>
      <div class="nav-left">
      <div class="row g-0">
      <div class="col">
        <div class="text6">
          <div v-if="checkerForm==false" @click="check()"><font-awesome-icon icon="fa-solid fa-square" /> Farklı bir yerde teslim etmek istiyorum</div>
        <div v-if="checkerForm==true" @click="check()"><font-awesome-icon icon="fa-solid fa-square-check" /> Farklı bir yerde teslim etmek istiyorum</div>
        </div>
      </div>
      </div></div>
      <div >
        <div class="nav-left">
        <button class="button4" > <Datepicker v-model="date"  range :partialRange="false"   minutesIncrement="30" /></button>
          <button class="button5">Uygun Araçları Bul <font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        </div>
    
      </div>
    </div>
   
  </div>
  <!--Uygun araç bul bitiş-->
  </div>
  <div classs="center">
  
      <div class="space1"><img src="@/images/AnaSayfa/carDeskop.png" alt="icon" style="  width: 60vw;"></div>
      
  <!--Kampanyalar-->
    <div id="demo5" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo5" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo5" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo5" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo5" data-bs-slide-to="3" ></button>
        <button type="button" data-bs-target="#demo5" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#demo5" data-bs-slide-to="5"></button>
      </div>
  
      <div class="carousel-inner" >
        <div class="carousel-item active">
          <img src="@/images/AnaSayfa/background2.png" alt="..." class="image2">
        </div>
        <div class="carousel-item">
          <img src="@/images/AnaSayfa/background2.png" alt="..." class="image2">
        </div>
        <div class="carousel-item">
          <img src="@/images/AnaSayfa/background2.png" alt="..." class="image2">
        </div>
        <div class="carousel-item ">
          <img src="@/images/AnaSayfa/background2.png" alt="..." class="image2">
        </div>
        <div class="carousel-item">
          <img src="@/images/AnaSayfa/background2.png" alt="..." class="image2">
        </div>
        <div class="carousel-item">
          <img src="@/images/AnaSayfa/background2.png" alt="..." class="image2">
        </div>
        </div>
    </div>
   
      <a href="#">Tüm Kampanyaları Gör <img src="@/images/AnaSayfa/KampanyaIcon.png" alt="icon" ></a>
  <!--Kampanyalar bitiş-->
  </div> <!--div class="center" kapanış-->
  
  
    <div class="space3"><!--İş ortaklarımız-->
      <div class="center">
      <div class="text7">İş Ortaklarımız</div>
      
      <div id="demo4" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo4" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo4" data-bs-slide-to="1"></button>
  
      </div>
  
      <div class="carousel-inner" >
        <div class="carousel-item active">
          <img src="@/images/AnaSayfa/logo/logo1.png" alt="..." style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo2.png" alt="..." style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo3.png" alt="..."  style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo4.png" alt="..." class="logo">
        </div>
        <div class="carousel-item">
          <img src="@/images/AnaSayfa/logo/logo5.png" alt="..." style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo6.png" alt="..." style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo7.png" alt="..." style="margin-right:2vw" class="logo">
        </div>
        </div>
    </div>
  
      </div>
    </div><!--İş ortaklarımız bitiş-->
  </template>
  
  <script >
  import { ref, onMounted } from 'vue';
  import aramaBari from './aramaBari.vue';
  export default {
    name: "AnaSayfa",
    components: {
      aramaBari,
  
    },
    data() {
      return {
        aramaBariController:false,
        aramaBari2Controller:false,
        checkerForm:false,
        tarihController:false,
        metinController:false,
        kiralaController:false,
      }
    },
    setup() {
          const date = ref();
   
          // For demo purposes assign range from the current date
          onMounted(() => {
              const startDate = new Date();
              const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
              date.value = [startDate, endDate];
          })
          
          return {
              date,
              countCheck:0,
          }
      },
    methods: {
      check() {
        this.checkerForm=!this.checkerForm;
      },
  
    },
  }
  </script>
  
  <style scoped>
  
  .center{
    margin:0 auto;
    width: 60%;/*1220px*/
    z-index: 2;
    position: relative;
    align-items: center;
  }
  .background{
    background: url("@/images/AnaSayfa/background.png") ;
    background-repeat: no-repeat;
    background-size:cover;
    height: 60vh;/*739px*/
    width: 100%;
    left:0;
    right:0;
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
    padding-top: 5vh;
  
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
    margin-top:10px;
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
  
  .button1 {
    height: 2.5em; /*40px*/
    width : 10em;/*162px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 0.9rem;/*11pt*/
    margin-right: 6px;/*6px*/
    margin-top: 18px;/*18px*/
    border-radius: 1px;
  
  }
  .button2 {
    height: 2.5em; /*40px*/
    width : 10em;/*162px*/
    background-color: #25459a;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 0.9rem;/*11pt*/
    margin-top: 18px;/*18px*/
    border-radius: 1px;
    margin-right: 6px;/*6px*/
  }
  .button3 {
      height: 62px;/*59px*/
    width : 56.5vw;/*349px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    margin-top: 6px;/*6px*/
    border-radius: 1px;
  
  }
  .button4 {
    height: 60px;/*59px*/
    width : 35vw;/*349px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 1vw;
    margin-top: 6px;/*6px*/
    border-radius: 1px;

    float:left;
  
  }
  .button5 {
  height: 60px;/*59px*/
    width : 21vw;/*349px*/
    float:right;
    background-color: #e51c3d;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 10pt;
    margin-top: 6px;/*6px*/
    margin-left:0.5vw;/*15px*/
    border-radius: 1px;
  
  }
  .logo{
  filter:grayscale(1);
}
.logo:hover{
  filter:grayscale(0);
}
  .space1 {
  position: relative;
  top: 5vh;/*45px*/
  z-index: 1;
  
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
  
  .image2 {
    margin-top: 4em;/*50px*/
    width:60%;
  }
  .icon{
    margin-left: 3.8em;/*72px*/
    position: relative; 
    float: left;
    margin-top: -0.2vh;
    top: 0;
  
  }
  .icon2{
    margin-left: 13em;/*72px*/
    position: relative; 
    float: left;
    margin-top: -0.2vh;
    top: 0;
  
  }
  .carousel-indicators [data-bs-target] {
    border-top: 10px solid transparent;
    border-bottom: none; 
    opacity: 0.5;
    transition: opacity 0.6s ease;
}
  </style>