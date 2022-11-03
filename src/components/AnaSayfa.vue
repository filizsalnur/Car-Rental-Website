<template>
  <div class="center"> <!--Ana Sayfanın kenar kısıtlamlarını belirler-->
    <div class="text1">SENİN İÇİN EN UYGUN ARACI</div>
    <div class="text2">ara, bul ve kirala</div>
    <div class="text3">En uygun fiyat garantisi ile ister online öde, ister aracı teslim alırken öde!</div>
    
    <div class="container"> <!--Uygun araç bul-->
      <div class="row">
      <div class="col">
        <div class="nav-left">
        <button class="button1">Günlük Kiralama</button>
        <button class="button2">Aylık Kiralama</button>
      </div>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src="@/images/AnaSayfa/Icon.png" alt="icon" class="icon"> 
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="nav-left">
        <button class="button3" @click="aramaBariController=!aramaBariController"><div class="text4"> <img src="@/images/AnaSayfa/BlueIcon.png" alt="icon"> Nereden Alacaksınız?</div></button>
        </div>
      </div>
      <div class="col">
        <div class="nav-left">
        <button class="button4"  @click="tarihController=!tarihController"><div class="text4"><img src="@/images/AnaSayfa/tarihIcon.png" alt="icon"> Alış Tarihi  |
          <img src="@/images/AnaSayfa/tarihIcon.png" alt="icon"> Bırakış Tarihi</div></button>
          <button class="button5">Uygun Araçları Bul <img src="@/images/AnaSayfa/searchIcon.png" alt="icon"></button>
        </div>
        <div v-if="tarihController==true">
          
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="nav-left">
        <button class="button3" v-if="checker==true"><div class="text4"> <img src="@/images/AnaSayfa/RedIcon.png" alt="icon"> Nerede Bırakacaksınız?</div></button>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="text6">
          <input type="checkbox" id="checkbox" v-model="checked" @click="checker=!checker" />
          <label for="checkbox" style="margin-left:5px"> Farklı bir yerde teslim etmek istiyorum</label>
        </div>
      </div>
      <div class="col"></div>
    </div>    
  </div><!--Uygun araç bul bitiş-->



<div class="space2"><!--Mavi kısım-->  
  <div class="icon2"><img src="@/images/AnaSayfa/plus.png" alt="icon" ></div>

  <div class="space1">
    <div class="container">
      <div class="row">
      <div class="col">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
      </div>
        <div class="col">
        <img src="@/images/AnaSayfa/plus2.png" alt="icon" class="icon3" >
      </div></div>
      <div class="row">
      <div class="col">
        <div class="text9" style="margin-top:45px">Kiralama ücretinin ufak bir kısmını ödeyin</div>
        <div class="text9">ve aracınızı rezerve edin...</div>
      </div></div>
      </div>
    </div>
  </div><!--Mavi kısım bitiş-->

  <!--Kampanyalar-->
  <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="slide in 7" :key="slide">
        <div class="image2"><img src="@/images/AnaSayfa/background2.png" alt="icon" ></div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <div class="button6">Tüm Kampanyaları Gör <img src="@/images/AnaSayfa/KampanyaIcon.png" alt="icon" ></div>
  <!--Kampanyalar bitiş-->
</div> <!--div class="center" kapanış-->

  <div class="space3"><!--İş ortaklarımız-->
    <div class="center">
    <div class="text7">İş Ortaklarımız</div>
    
    </div>
  </div><!--İş ortaklarımız bitiş-->

  <div class="center">

    <div class="container"><!--Uçak kısmı-->
      <div class="row">
      <div class="col-12">
        <div class="text7">Popüler Havalimanları</div>
      </div>
      </div>
      <div class="row">
      <div class="col-6">
        <div class="plane1">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
        </div>
      </div>
      <div class="col-3">
        <div class="plane2">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
        </div>
      </div>
      <div class="col-3">
        <div class="plane3">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="plane4">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
        </div>
      </div>
      <div class="col-3">
        <div class="plane5">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
        </div>
      </div>
      <div class="col-6">
        <div class="plane6">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
        </div>
      </div>
    </div>
    </div><!--Uçak kısmı bitiş-->
  </div><!--center bitiş-->

  
  <FooterApp/>
 
</template>

<script >

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination} from 'vue3-carousel'

import FooterApp from './FooterApp.vue';
export default {
  name: "AnaSayfa",
  components: {
    FooterApp,
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      aramaBariController:false,
      checker:false,
      tarihController:false,

    }
  },

  methods: {
  
  },
}
</script>

<style scoped>
.background{
  background-image: url("@/images/AnaSayfa/background.png");
}
.center{
  margin:0 auto;
  width: 1220px;
}
.center2{
  margin:0 auto;
  width: 1226px;
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
  font-size: 18pt;
  color: #ffffff;
  text-align: left;
  padding-top: 100px;
}
.text2{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 60pt;
  color: #ffffff;
  text-align: left;
  line-height: 60pt;
}
.text3{
  position: relative;
  font-family: "PoppinsBold" ;
  font-size: 13pt;
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
  font-size: 13pt;
  color: #2a2a2a;
  margin-top: 30px;
  float: left;
}
.text8{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 20pt;
  color: #ffffff;
  text-align: left;
  margin-left: 75px;
  margin-top:70px;
}
.text9{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 15pt;
  color: #ffffff;
  text-align: left;
  margin-left: 75px;
  margin-top:0px;
}
.button1 {
  height: 40px;
  width : 162px;
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 11pt;
  margin-right: 6px;
  margin-top: 18px;
  border-radius: 8px;
}
.button2 {
  height: 40px;
  width : 162px;
  background-color: #25459a;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 11pt;
  margin-top: 18px;
  border-radius: 8px;
}
.button3 {
  height: 59px;
  width : 594px;
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 14pt;
  margin-top: 6px;
  border-radius: 8px;
}
.button4 {
  height: 59px;
  width : 349px;
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  margin-top: 6px;
  border-radius: 8px;
}
.button5 {
  height: 59px;
  width : 200px;
  float:right;
  background-color: #e51c3d;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  margin-top: 6px;
  margin-left:15px;
  border-radius: 8px;
}
.button6 {
  height: 18px;
  width : 174px;
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  margin: 0 auto;
  font-family: "Quicksand" ;
  font-size: 11pt;
  margin-top: 6px;
  border-radius: 8px;
}

.space1 {
  height: 306px;
  width : 1220px;
  background-color: #25459a;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  border-radius: 8px;
  bottom: unset;
  position: absolute;
  top: 45px;
  z-index: 1;
}
.space2 {
  height: 200px;
  width : 1220px;

  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  margin-top: 30px;
  margin-bottom: 100px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size:cover;
  position: relative;
}
.space3 {
  height: 200px;
  width : 1928px;
  background-color: #e6ecf8;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  border-radius: 8px;
  position: relative;
  top: 45px;

}
.image{
  background: url("@/images/AnaSayfa/background.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 739px;
  width: 1920px
  
}
.image2 {
  margin-top: 50px;
  border-radius: 8px;
}
.plane1{
  background: url("@/images/AnaSayfa/plane1.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 190px;
  width: 606px;
  float:left;
  position: relative;

}
.plane2{
  background: url("@/images/AnaSayfa/plane2.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 190px;
  width: 300px;
  float:left;
  position: relative;

}
.plane3{
  background: url("@/images/AnaSayfa/plane3.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 190px;
  width: 300px;
  float:left;
  position: relative;


}
.plane4{
  background: url("@/images/AnaSayfa/plane4.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 190px;
  width: 300px;
  float:left;
  position: relative;
  margin-top:8px;
}
.plane5{
  background: url("@/images/AnaSayfa/plane5.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 190px;
  width: 300px;
  float:left;
  position: relative;
  margin-top:8px;
}
.plane6{
  background: url("@/images/AnaSayfa/plane6.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 190px;
  width: 606px;
  float:left;
  position: relative;
  margin-top:8px;
}
.icon{
  margin-left: 72px;
  position: relative; 
  float: left;
  margin-top: 0;
  top: 0;
  line-height: 0;
}
.icon2{
	left: 380px;
  position: absolute;
  z-index: 2;
}
.icon3{
  margin-left: 200px;
  position: relative; 
  float:left;
  margin-top: 60px;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>