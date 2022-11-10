<template>
    <div class="background"></div>
     <div class="center"> <!--Ana Sayfanın kenar kısıtlamlarını belirler-->
   
       <div class="text1">SENİN İÇİN EN UYGUN ARACI</div>
       <div class="text2">ara, bul ve kirala</div>
   
    <!--Uygun araç bul-->

       <div class="center2" v-if="kiralaController==false">
       
           <div style="margin-left:5vw"><button class="button1">Günlük Kiralama</button></div>
           <div style="margin-right:5vw"><button class="button2" @click="kiralaController=true">Aylık Kiralama</button></div>
         
       </div>
       <div class="center2" v-if="kiralaController==true">
       
       <div style="margin-left:5vw"><button class="button2" @click="kiralaController=false" >Günlük Kiralama</button></div>
       <div style="margin-right:5vw"><button class="button1" >Aylık Kiralama</button></div>
     
      </div>

         <div v-if="kiralaController==false">
           <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon"> 
         </div>
     
         <div v-if="kiralaController==true">
           <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon2"> 
         </div>
           <div>
     

           <div class="nav-left">
           <button class="button3" @click="aramaBariController=!aramaBariController"><div class="text4"> <img src="@/images/AnaSayfa/BlueIcon.png" alt="icon"> Nereden Alacaksınız?</div></button>
           </div>
           <div v-if="aramaBariController==true"><aramaBari/></div>
           <div class="nav-left">
           <div v-if="checkerForm==true">
            <div v-if="aramaBari2Controller==true"><aramaBari/></div>
           <button class="button3"  @click="aramaBari2Controller=!aramaBari2Controller"><div class="text4"> <img src="@/images/AnaSayfa/RedIcon.png" alt="icon"> Nerede Bırakacaksınız?</div></button>
           </div>
    
           <div class="text6">
            <div v-if="checkerForm==false" @click="check()"><font-awesome-icon icon="fa-solid fa-square" /> Farklı bir yerde teslim etmek istiyorum</div>
        <div v-if="checkerForm==true" @click="check()"><font-awesome-icon icon="fa-solid fa-square-check" /> Farklı bir yerde teslim etmek istiyorum</div>
           </div>
         </div>
         <div >
           <div class="nav-left">
           <button class="button4" > <Datepicker v-model="date" range :partialRange="false" /></button>
             <button class="button5">Uygun Araçları Bul <font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
           </div>
       
         </div>
       </div>
    
     </div>
   <!--Uygun araç bul bitiş-->
     
   <div class="space1"><img src="@/images/mobil/AnaSayfa/payment.png" alt="icon" style="  width: 90vw;"></div>

<div class="center"><!--Center -->
   <!--Kampanyalar-->
   <div v-if="aramaBariController==false">
    <div v-if="aramaBari2Controller==false">
  <div id="demo7" class="carousel slide" data-bs-ride="carousel" >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo7" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo7" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo7" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#demo7" data-bs-slide-to="3" ></button>
      <button type="button" data-bs-target="#demo7" data-bs-slide-to="4"></button>
      <button type="button" data-bs-target="#demo7" data-bs-slide-to="5"></button>
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
      <div class="carousel-item active">
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
  </div>
</div>
<!--Kampanyalar bitiş-->
</div> <!--Center bitiş-->
<div class="space3"><!--İş ortaklarımız-->
    <div class="center">
    <div class="text7">İş Ortaklarımız</div>
    
    <div id="demo3" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo3" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo3" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo3" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#demo3" data-bs-slide-to="3"></button>

    </div>

    <div class="carousel-inner" >
      <div class="carousel-item active">
        <img src="@/images/AnaSayfa/logo/logo1.png" alt="..." style="margin-right:2vw" class="logo">

        <img src="@/images/AnaSayfa/logo/logo2.png" alt="..." class="logo">
      </div>
      <div class="carousel-item ">
        <img src="@/images/AnaSayfa/logo/logo3.png" alt="..."  style="margin-right:2vw" class="logo">

        <img src="@/images/AnaSayfa/logo/logo4.png" alt="..." >
      </div>
      <div class="carousel-item">
        <img src="@/images/AnaSayfa/logo/logo5.png" alt="..." style="margin-right:2vw" class="logo">

        <img src="@/images/AnaSayfa/logo/logo6.png" alt="..." class="logo">
      </div>
      <div class="carousel-item">
        <img src="@/images/AnaSayfa/logo/logo7.png" alt="..." class="logo">
      </div>
      </div>
  </div>

    </div>
  </div><!--İş ortaklarımız bitiş-->
     </template>
     
     <script >
    import aramaBari from './aramaBari.vue';
     import { ref } from 'vue';
   
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
           metinController:false,
           kiralaController:false,
         }
       },
       setup() {
           const date = ref();
           
           return {
             date,
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
   .background{
     background: url("@/images/mobil/AnaSayfa/background.png") ;
     background-repeat: no-repeat;
     background-size:cover;
     height: 70vh;/*739px*/
     width: 100%;
     left:0;
     background-color: #0e3784;
     right:0;
     z-index: 1;
     position:absolute;
     overflow: hidden;
   }
   .center{
     margin:0 auto;
     width: 90%;/*1220px*/
     z-index: 4;
     position: relative;
     align-items: center;
   }
   .center2{
    display:flex;
     justify-content: space-between;
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
     font-size: 4vw;/*60pt*/
     color: #ffffff;
     text-align: center;
     padding-top: 3vh;
   
   }
   .text2{
     position: relative;
     font-family: "Quicksand" ;
     font-size: 9vw; /*60pt*/
     color: #ffffff;
     text-align: center;
     line-height: 7vw;
    margin-bottom:2vh;
   }
   .text4{
     padding-left: 28px;
     text-align: left;
     position: relative; 
   
   }

   .text6{
     margin-top:20px;

     color: #ffffff;
     position: relative; 
     float: left;
   
   }
   .text7{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 12pt;
  color: #2a2a2a;
  margin-bottom: 2.5vh;
  padding-top: 2vh;
}
   .button1 {
       height: 5vh; /*40px*/
       width : 40vw;/*162px*/
       background-color: #ffffff;
       color: #2a2a2a;
       border: none;
       font-family: "Quicksand" ;
       font-size: 0.9rem;/*11pt*/
       margin-top: 18px;/*18px*/
       border-radius: 1px;
   
   }
   .button2 {
     height: 5vh; /*40px*/
     width : 40vw;/*162px*/
     background-color: #25459a;
     color: #ffffff;
     border: none;
     font-family: "Quicksand" ;
     font-size: 0.9rem;/*11pt*/
     margin-top: 18px;/*18px*/
     border-radius: 1px;
   
   }
   .button3 {
     height: 7vh;/*59px*/
     width : 90vw;/*594px*/
     background-color: #ffffff;
     color: #2a2a2a;
     border: none;
     font-family: "Quicksand" ;
     font-size: 14pt;
     margin-top: 6px;/*6px*/
     border-radius: 1px;
   
   }
   .button4 {
       height: 7vh;/*59px*/
     width : 90vw;/*594px*/
     background-color: #ffffff;
     color: #2a2a2a;
     border: none;
     font-family: "Quicksand" ;
     font-size: 12pt;
     margin-top: 6px;/*6px*/
     border-radius: 1px;
   
   
   }
   .button5 {
       height: 7vh;/*59px*/
     width : 90vw;/*594px*/
     float:right;
     background-color: #e51c3d;
     color: #ffffff;
     border: none;
     font-family: "Quicksand" ;
     font-size: 12pt;
     margin-top: 6px;/*6px*/
   
     border-radius:1px;
   
   }
   .logo{
  filter:grayscale(1);
}
.logo:hover{
  filter:grayscale(0);
}
  .image2 {
  margin-top: 4vh;/*50px*/
  width:90vw;
  height: 100%;
  }
   .space1 {
   
     position: relative;
     top: 3vh;/*45px*/
     z-index: 3;
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
  height: 16vh;/*200px*/
  width : 100vw;/*1928px*/
  background-color: #e6ecf8;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  border-radius: 8px;
  position: relative;
  top: 5vh;/*45px*/
    z-index:1;
}
   .icon{
     margin-left: 22vw;/*72px*/
     position: relative; 
     float: left;
     margin-top: -0.2vh;
     top: 0;
   }
   .icon2{
     margin-left: 62.5vw;/*72px*/
     position: relative; 
     float: left;
     margin-top: -0.2vh;
     top: 0;
   }

   
     </style>