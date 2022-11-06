<template>

<div class="background"></div>
<div class="center"> <!--Ana Sayfanın kenar kısıtlamlarını belirler-->

  <div class="text1">SENİN İÇİN EN UYGUN ARACI</div>
  <div class="text2">ara, bul ve kirala</div>
  <div class="text3">En uygun fiyat garantisi ile ister online öde, ister aracı teslim alırken öde!</div>

<!--Uygun araç bul-->
  <div class="container" style="border:0px;margin:0px">
    <div class="row g-1">
    <div class="col">
      <div class="nav-left">
      <button class="button1">Günlük Kiralama</button>
      <button class="button2">Aylık Kiralama</button>
    </div>
    </div>
    <div class="col">
    </div>
  </div>
  <div class="row g-1">
    <div class="col">
      <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon"> 
    </div>
    <div class="col">
    </div>
  </div>
  <div class="row g-1">
    <div class="col">
      <div class="nav-left">
      <button class="button3" @click="aramaBariController=!aramaBariController"><div class="text4"> <img src="@/images/AnaSayfa/BlueIcon.png" alt="icon"> Nereden Alacaksınız?</div></button>
      </div>
      <div class="nav-left">
      <div v-if="checkerForm==true">
      <button class="button3"><div class="text4"> <img src="@/images/AnaSayfa/RedIcon.png" alt="icon"> Nerede Bırakacaksınız?</div></button>
      </div>
    </div>
      <div class="text6">
        <input type="checkbox" id="input1" v-model="checkerForm" @click="check()"/>
        <label for="input1" style="margin-left:5px"> Farklı bir yerde teslim etmek istiyorum</label>
      </div>
    </div>
    <div class="col">
      <div class="nav-left">
      <button class="button4" > <Datepicker v-model="date" range :partialRange="false" /></button>
        <button class="button5">Uygun Araçları Bul <img src="@/images/AnaSayfa/searchIcon.png" alt="icon"></button>
      </div>
  
    </div>
  </div>
 
</div>
<!--Uygun araç bul bitiş-->
</div>
<div classs="center">

    <div class="space1"><img src="@/images/AnaSayfa/carDeskop.png" alt="icon" style="  width: 60vw;height: 40vh;"></div>

  <!--Kampanyalar-->
  <div >
  <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="slide in 7" :key="slide">
        <div class="image2"><img src="@/images/AnaSayfa/background2.png" alt="icon" ></div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <a href="#">Tüm Kampanyaları Gör <img src="@/images/AnaSayfa/KampanyaIcon.png" alt="icon" ></a>
</div>
  <!--Kampanyalar bitiş-->
</div> <!--div class="center" kapanış-->


  <div class="space3"><!--İş ortaklarımız-->
    <div class="center">
    <div class="text7">İş Ortaklarımız</div>
    
    </div>
  </div><!--İş ortaklarımız bitiş-->
</template>

<script >
import { ref, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination} from 'vue3-carousel'
export default {
  name: "AnaSayfa",
  components: {
    Carousel,
    Slide,
    Pagination,

  },
  data() {
    return {
      aramaBariController:false,
      checkerForm:false,
      tarihController:false,
      metinController:false,
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
  height: 80vh;/*739px*/
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
    height: 6vh;/*59px*/
  width : 29vw;/*349px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  margin-top: 6px;/*6px*/
  border-radius: 8px;

}
.button4 {
  height: 6vh;/*59px*/
  width : 18vw;/*349px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 1vw;
  margin-top: 6px;/*6px*/
  border-radius: 8px;
  float:left;

}
.button5 {
height: 6vh;/*59px*/
  width : 10vw;/*349px*/
  float:right;
  background-color: #e51c3d;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-top: 6px;/*6px*/
  margin-left:15px;/*15px*/
  border-radius: 8px;

}

.space1 {
position: relative;
top: 5vh;/*45px*/
z-index: 3;

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

}
.icon{
  margin-left: 72px;/*72px*/
  position: relative; 
  float: left;
  margin-top: 0;
  top: 0;
  line-height: 0;
}

</style>