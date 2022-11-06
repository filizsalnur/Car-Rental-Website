<template>
 <div class="background"></div>
  <div class="center"> <!--Ana Sayfanın kenar kısıtlamlarını belirler-->

    <div class="text1">SENİN İÇİN EN UYGUN ARACI</div>
    <div class="text2">ara, bul ve kirala</div>

 <!--Uygun araç bul-->
    <div class="center2">
    
        <div><button class="button1">Günlük Kiralama</button></div>
        <div><button class="button2">Aylık Kiralama</button></div>
      
    </div>

 
      <div >
        <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon"> 
      </div>
  

        <div>

        <div class="nav-left">
        <button class="button3" @click="aramaBariController=!aramaBariController"><div class="text4"> <img src="@/images/AnaSayfa/BlueIcon.png" alt="icon"> Nereden Alacaksınız?</div></button>
        </div>
        <div class="nav-left">
        <div v-if="checkerForm==true">
        <button class="button3"><div class="text4"> <img src="@/images/AnaSayfa/RedIcon.png" alt="icon"> Nerede Bırakacaksınız?</div></button>
        </div>
 
        <div class="text6">
          <input type="checkbox" id="input1" v-model="checkerForm" @click="check()"/>
          <label for="input1" style="margin-left:5px"> Farklı bir yerde teslim etmek istiyorum</label>
        </div>
      </div>
      <div >
        <div class="nav-left">
        <button class="button4" > <Datepicker v-model="date" range :partialRange="false" /></button>
          <button class="button5">Uygun Araçları Bul <img src="@/images/AnaSayfa/searchIcon.png" alt="icon"></button>
        </div>
    
      </div>
    </div>
 
  </div>
<!--Uygun araç bul bitiş-->
  
<div class="space1"><img src="@/images/mobil/AnaSayfa/payment.png" alt="icon" style="  width: 90vw;height: 25vh;"></div>
  
<havalimanları/>
<lokasyonlar/>
  </template>
  
  <script >
  import havalimanları from './companents/havalimanları.vue'
  import lokasyonlar from './companents/lokasyonlar.vue'
  import { ref } from 'vue';

  export default {
    name: "AnaSayfa",
    components: {
        havalimanları,
        lokasyonlar,
    },
    data() {
      return {
        checkerForm:false,
        metinController:false,
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
  padding-top: 5vh;

}
.text2{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 9vw; /*60pt*/
  color: #ffffff;
  text-align: center;
  line-height: 7vw;

}
.text3{
  position: relative;
  font-family: "PoppinsBold" ;
  font-size: 2vw;
  color: #ffffff;
  text-align: center;
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
    height: 5vh; /*40px*/
    width : 40vw;/*162px*/
    background-color: #ffffff;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 0.9rem;/*11pt*/

    margin-top: 18px;/*18px*/
    border-radius: 8px;

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
  border-radius: 8px;

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
  border-radius: 8px;

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
  border-radius: 8px;


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

  border-radius: 8px;

}
.button6 {
    height: 7vh;/*59px*/
  width : 90vw;/*594px*/
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
    height: 7vh;/*59px*/
  width : 90vw;/*594px*/
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  font-family: "Quicksand" ;
  font-size: 1vw;
  margin-top: 1em;
  border-radius: 3px;
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

  </style>