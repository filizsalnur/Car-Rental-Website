<template>
    <div class="background" @click="center()"></div>
     <div class="center"> <!--Ana Sayfanın kenar kısıtlamlarını belirler-->
   
       <div class="text1"  @click="center()">SENİN İÇİN EN UYGUN ARACI</div>
       <div class="text2" @click="center()">ara, bul ve kirala</div>
   
    <!--Uygun araç bul-->

       <div class="center2" v-if="kiralaController==false" @click="center()">
       
           <div ><button class="button1">Günlük Kiralama</button></div>
           <div style="width:2vw"></div>
           <div ><button class="button2" @click="kiralaController=true">Aylık Kiralama</button></div>
         
       </div>
       <div class="center2" v-if="kiralaController==true">
       
       <div ><button class="button2" @click="kiralaController=false" >Günlük Kiralama</button></div>
       <div style="width:2vw"></div>
       <div ><button class="button1" >Aylık Kiralama</button></div>
     
      </div>

         <div v-if="kiralaController==false">
           <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon"> 
         </div>
     
         <div v-if="kiralaController==true">
           <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon2"> 
         </div>
           <div>
     

            <div class="nav-left">
          <div class="nav-left" v-if="aramaBariController==false">
        <button class="button3" @click="aramaBariController=!aramaBariController"><div class="text4"> <font-awesome-icon icon="fa-solid fa-location-dot" style="color:#25459a"/> Nereden Alacaksınız?</div></button>
        </div></div>
        <div v-if="aramaBariController==true">
        <input v-model="filter" placeholder=" Nereden Alacaksınız?" class="button3" />
        <div class="dropdown" v-if="aramaBariController==true && filter!='' ">
        <div v-for="item in filteredItems" :key="item.id" @click="onClickItem(item)" class="text5">
          {{ item.name }}
        </div>
      </div>
      <div v-if="aramaBariController==true && filter=='' " style="margin-top:-10vh"><aramaBari/></div> 
      </div>


           <div class="nav-left">
           <div v-if="checkerForm==true">
            <div v-if="checkerForm==true" style="margin-top:1vh">
          <div  v-if="aramaBari2Controller==true && filter2=='' " ><aramaBari/></div>  
        <button class="button3" v-if="aramaBari2Controller==false" @click="aramaBari2Controller=!aramaBari2Controller"><div class="text4"> <font-awesome-icon icon="fa-solid fa-location-dot" style="color:#ea002a"/> Nerede Bırakacaksınız?</div></button>
        <div v-if="aramaBari2Controller==true">
        <input v-model="filter2" placeholder=" Nereye Bırakacaksınız?" class="button3" />
        <div class="dropdown" v-if="aramaBari2Controller==true && filter2!='' ">
        <div v-for="item in filteredItems2" :key="item.id" @click="onClickItem2(item)" class="text5">
          <div style="left:2vw">{{ item.name }}</div>
        </div>
      </div>
      </div>
      </div>           </div>
    
           <div class="text6" >
            <div v-if="checkerForm==false" @click="check()"><font-awesome-icon icon="fa-solid fa-square" /> Farklı bir yerde teslim etmek istiyorum</div>
        <div v-if="checkerForm==true" @click="check()"><font-awesome-icon icon="fa-solid fa-square-check" /> Farklı bir yerde teslim etmek istiyorum</div>
           </div>
         </div>
         <div >
           <div class="nav-left">
            <div><button class="button4">
          <date-picker 
            v-model:value="tarihController" 
            type="datetime"
            range
            :minute-step="30"
            :hour-options="hours"
            format="DD.MM.YYYY HH:mm"
            value-type="format"
            placeholder="Alış-Bırakılış Tarihi"
          />
        </button></div>
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
 
    <a href="#">Tüm Kampanyaları Gör <font-awesome-icon icon="fa-solid fa-chevron-right" style="margin-right: 0.5vw;"/></a>
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
     import axios from "axios";
    import aramaBari from './aramaBari.vue';
    import DatePicker from 'vue-datepicker-next';
     import { ref } from 'vue';
   
     export default {
       name: "AnaSayfa",
       components: {
        aramaBari,
        DatePicker,
       },
       data() {
         return {
          aramaBariController:false,
          aramaBari2Controller:false,
           checkerForm:false,
           metinController:false,
           kiralaController:false,
           filter: "",
        filter2: "",
        selected: null,
        items: [
          { id: 1, name: "Istanbul Havalimani" },
          { id: 2, name: "Ankara Havalimani" },
          { id: 3, name: "Izmir Havalimani" },
        ]
         }
       },
       computed: {
    filteredItems() {
      return this.items.filter(item => item.name.includes(this.filter));
    },
    filteredItems2() {
      return this.items.filter(item => item.name.includes(this.filter2));
    },
  },
       setup() {
           const date = ref();
           
           return {
             date,
           }
       },
       methods: {
        Show() {
      axios
        .get("https://test.kiralacar.com/api/locations?LangID=1&p=sa", this.items)
    },
       check() {
         this.checkerForm=!this.checkerForm;
       },
       center(){
        this.aramaBariController=false;
        this.aramaBari2Controller=false;
      },
          onClickItem(item) {
      this.selected = item;
      this.filter = item.name;
      this.aramaBariController = false;
    },
    onClickItem2(item) {
      this.selected = item;
      this.filter2 = item.name;
      this.aramaBari2Controller = false;
    }
   
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
   .dropdown {
  position: absolute;
  width:90vw;

    margin-top:10px;
    background-color: #ffffff;
    margin-left: 1px;
    font-size: 3vw;/*60pt*/
  color: #2a2a2a;
  text-align: left;
  line-height: 4vh;
  border:1px solid #2a2a2a;
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
     padding-left: 10px;
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
       border-radius: 5px;
   
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
     border-radius: 5px;
   
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
     border-radius: 5px;
   
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
     border-radius: 5px;
   
   
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
   
     border-radius:7px;
   
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
  width : 100%;/*1928px*/
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
     margin-left: 17vw;/*72px*/
     position: relative; 
     float: left;
     margin-top: -0.3vh;
     top: 0;
   }
   .icon2{
     margin-left: 68vw;/*72px*/
     position: relative; 
     float: left;
     margin-top: -0.3vh;
     top: 0;
   }
   .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1px !important;
    margin-left: 15%;
    list-style: none;
}
.mx-input {
    display: inline-block;
    box-sizing: border-box;
    width: 0;
    height: 34px;
    padding: 6px 30px;
    padding-left: 10px;
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    background-color: #fff;
    border: none !important;
    border-radius: 4px;
    box-shadow: none !important;
}
.mx-datepicker-range {
  width: 88vw !important;
  border: none !important;
  padding-left: 0 !important;
}
     </style>