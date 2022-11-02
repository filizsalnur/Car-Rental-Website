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
          <div class="flex">
              <litepie-datepicker
                placeholder="My Placeholder"
                v-model="dateValue"
              ></litepie-datepicker>
            </div>
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


 <!-- <div class="icon2"><img src="@/images/AnaSayfa/plus.png" alt="icon" ></div>-->

  <div class="space1"><!--Mavi kısım-->  
    <div class="container">
      <div class="row">
      <div class="col">
        <div class="text8">ÖN ÖDEME FIRSATI İLE</div>
        <div class="text9">araç kiralamak artık çok kolay!</div>
      </div></div>
      </div>
  </div><!--Mavi kısım bitiş-->


  <div class="image2"><!--Kampanyalar-->

  </div><!--Kampanyalar bitiş-->
  <div class="text7">Tüm Kampanyaları Gör <img src="@/images/AnaSayfa/KampanyaIcon.png" alt="icon" ></div>
</div> <!--div class="center" kapanış-->
  <FooterApp/>
 
</template>

<script >
import { ref } from 'vue';
import LitepieDatepicker from 'litepie-datepicker';
import FooterApp from './FooterApp.vue';
export default {
  name: "AnaSayfa",
  components: {
    FooterApp,
    LitepieDatepicker,
  },
  data() {
    return {
      aramaBariController:false,
      checker:false,
      tarihController:false,
    }
  },
  setup() {
      const dateValue = ref([]);
      
      return {
        dateValue
      };
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
  padding-top: 5px;
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
  margin-right: 3px;
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
  width : 197px;
  background-color: #e51c3d;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  margin-top: 6px;
  margin-left:15px;
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
  margin-top: 30px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size:cover;
  z-index: 15;
  float:left;
}
.image{
  background: url("@/images/AnaSayfa/background.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 739px;
  width: 1920px
  
}
.image2 {
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  margin-top: 160px;
  border-radius: 8px;
  background: url("@/images/AnaSayfa/background2.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 240px;
  width: 1220px;

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
	z-index: 15;
	left: 738px;
	top: 589px;
}

</style>