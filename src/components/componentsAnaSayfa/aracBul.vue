<template>

  <div class="background" @click="center()"></div>
  <div class="center" > <!--Ana Sayfanın kenar kısıtlamlarını belirler-->
  
    <div class="text1">SENİN İÇİN EN UYGUN ARACI</div>
    <div class="text2">ara, bul ve kirala</div>
    <div class="text3">En uygun fiyat garantisi ile ister online öde, ister aracı teslim alırken öde!</div>
  
  <!--Uygun araç bul-->
  
   
      <div class="row g-1" v-if="kiralaController==false"  @click="center()">
      <div class="col">
        <div class="nav-left">
        <button class="button1">Günlük Kiralama</button>
        <button class="button2" @click="kiralaController=true">Aylık Kiralama</button>
      </div>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row g-1" v-if="kiralaController==true"  @click="center()">
      <div class="col">
        <div class="nav-left">
        <button class="button2" @click="kiralaController=false">Günlük Kiralama</button>
        <button class="button1" >Aylık Kiralama</button>
      </div>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row g-1" @click="center()">
      <div class="col" v-if="kiralaController==false">
        <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon"> 
      </div>
      <div class="col" v-if="kiralaController==true">
        <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon2"> 
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row g-1">
      <div class="col-5">
        <div class="nav-left">
          <div class="nav-left" v-if="aramaBariController==false" @click="Show()">
        <button class="button3" @click="aramaBariController=!aramaBariController"><div class="text4"> <font-awesome-icon icon="fa-solid fa-location-dot" style="color:#25459a"/> Nereden Alacaksınız?</div></button>
        </div></div>
        <div v-if="aramaBariController==true">
        <input v-model="filter" placeholder=" Nereden Alacaksınız?" class="button3" />
        <div class="dropdown" v-if="aramaBariController==true && filter!='' ">
        <div v-for="item in filteredItems" :key="item.id" @click="onClickItem(item)" class="text5">
          {{ item.text }}
        </div>
      </div>
      <div v-if="aramaBariController==true && filter=='' " style="margin-top:-7vh"><aramaBari/></div> 
      </div>
    
        <div class="nav-left">
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
      </div>
        
      </div>
        <div class="text6" v-if="aramaBariController==false && aramaBari2Controller==false">
          <div v-if="checkerForm==false" @click="check()"><font-awesome-icon icon="fa-solid fa-square" /> Farklı bir yerde teslim etmek istiyorum</div>
          <div v-if="checkerForm==true" @click="check()"><font-awesome-icon icon="fa-solid fa-square-check" /> Farklı bir yerde teslim etmek istiyorum</div>
  
        </div>
      </div>
      <div class="col-7">
        <div class="space4"> 
          
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
        <div><router-link to="/kiralama"><button class="button5"><b>Uygun Araçları Bul </b><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button></router-link></div>
        </div>
    
      </div>
    </div>
  
  <!--Uygun araç bul bitiş-->
  </div>
  <div classs="center">
  
      <div class="space1"><img src="@/images/AnaSayfa/carDeskop.png" alt="icon" style="  width: 65vw;"></div>
      
  <!--Kampanyalar-->
  <div class="space5">
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3" ></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
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
  </div>
      <a href="#">Tüm Kampanyaları Gör <font-awesome-icon icon="fa-solid fa-chevron-right" style="margin-right: 0.5vw;"/></a>
  <!--Kampanyalar bitiş-->
  </div> <!--div class="center" kapanış-->
  
  
    <div class="space3"><!--İş ortaklarımız-->
      <div class="center">
      <div class="text7">İş Ortaklarımız</div>
      
      <div id="demo2" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" class="active" ></button>
        <button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
  
      </div>
  
      <div class="carousel-inner" >
        <div class="carousel-item active">
          <img src="@/images/AnaSayfa/logo/logo1.png" alt="..." style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo2.png" alt="..." style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo3.png" alt="..."  style="margin-right:2vw" class="logo">
  
          <img src="@/images/AnaSayfa/logo/logo4.png" alt="..."  class="logo">
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
  import axiosInstance from '@/plugins/axios';
  import aramaBari from './aramaBari.vue';
  import DatePicker from 'vue-datepicker-next';
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
        tarihController:false,
        metinController:false,
        kiralaController:false,
        filter: "",
        filter2: "",
        selected: null,
        items: [{
        "id":"",
        "text":""}]
      }
    },
    mounted(){
      this.getLocations();
    },
  
      computed: {
    filteredItems() {
      return this.items.filter(item => item.name.includes(this.filter));
    },
    filteredItems2() {
      return this.items.filter(item => item.name.includes(this.filter2));
    },
  },
    methods: {
      async getLocations(){
        const response = await axiosInstance.get('locations?LangID=1&p=sa')
        console.log(response)
        
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
  .center{
    margin:0 auto;
    width: 65%;/*1220px*/
    z-index: 2;
    position: relative;
    align-items: center;
  }
  .background{
    background: url("@/images/AnaSayfa/background.png") ;
    background-repeat: no-repeat;
    background-size:cover;
    height: 80vh;/*739px*/
    width: 100%;
    left:0;
    right:0;
    z-index: 1;
    position:absolute;
    overflow: hidden;
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
    padding-left: 10px;
    text-align: left;
    position: relative; 
  }
  .text5{
    padding-left: 28px;
  }
  .text6{
    margin-top:20px;
    color: #ffffff;
    position: relative; 
    float: left;
    font-size: 1vw;
  }
  .text7{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 19pt;
    color: #2a2a2a;
    margin-top: 10px;
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
    border-radius: 5px;
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
    border-radius: 5px;
    margin-right: 6px;/*6px*/
  }
  .button3 {
      height:60px;/*59px*/
    width : 26vw;/*349px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    margin-top: 6px;/*6px*/
    border-radius: 5px;
  }
  .button4 {
    height: 60px;/*59px*/
    width : 23vw;/*349px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    margin-top: 6px;/*6px*/
    border-radius: 5px;
  }
  .button5 {
  height: 60px;/*59px*/
    width : 13.5vw;/*349px*/

    background-color: #e51c3d;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 0.8vw;
    margin-top: 6px;/*6px*/

    border-radius: 7px;
  }
  .carousel-indicators [data-bs-target] {
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 3px;
      padding: 0;
      margin-right: 3px;
      margin-left: 3px;
      text-indent: -999px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border: 0;
      border-top: 10px solid transparent;
      border-bottom: none; 
      opacity: 0.5;
      transition: opacity 0.6s ease;
  }
  .logo{
    height: 3vh;
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
    height: 100px;/*200px*/
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
  .space4{
    display:flex;
      justify-content: space-between;
      align-items: center;
  }
  .space5{
    position: relative;
    z-index:3;
    width: 100%;
  }
  .image2 {
    margin-top: 4em;/*50px*/
    width:65vw;
    z-index: 3;
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
  .dropdown {
  position: absolute;
  width:24.5vw;

    margin-top:10px;
    background-color: #ffffff;
    margin-left: 1px;
    font-size: 1vw;/*60pt*/
  color: #2a2a2a;
  text-align: left;
  line-height: 4vh;
  border:1px solid #2a2a2a;
}
  </style>