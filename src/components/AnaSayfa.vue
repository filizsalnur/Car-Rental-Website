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
      <div class="col-4">
        <div class="text9" style="margin-top:45px">Kiralama ücretinin ufak bir kısmını ödeyin</div>
        <div class="text9">ve aracınızı rezerve edin...</div>
      </div>
      <div class="col-8">
        <img src="@/images/AnaSayfa/car.png" alt="icon" class="icon4" >
      </div>
      </div>
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
    <a href="#">Tüm Kampanyaları Gör <img src="@/images/AnaSayfa/KampanyaIcon.png" alt="icon" ></a>
  <!--Kampanyalar bitiş-->
</div> <!--div class="center" kapanış-->


  <div class="space3"><!--İş ortaklarımız-->
    <div class="center">
    <div class="text7">İş Ortaklarımız</div>
    
    </div>
  </div><!--İş ortaklarımız bitiş-->

  <div class="center">

    <div class="show-on-deskop"> <deskopCards/></div>
    <div class="show-on-tablet"> <deskopCards/></div>

    <div class="show-on-deskop"> <deskopLokasyonlar/></div>
    <div class="show-on-tablet"> <tabletLokasyonlar/></div>


    <div class="show-on-deskop"> <deskopCar/></div>
    <div class="show-on-tablet"> <tabletCar/></div>
   

  <!--Açıklama-->
  <div>
  <div class="text21"><b>Araç Kiralama</b> - Rent A Car</div>
  <div class="text21">Günümüzde arac satin almanin zorlugu geek bireysel gerekse de kurumsal firmalari arac kiralama hizmetine yonlendirdi. Dünya capinda da oldukça yaygin olarak kullanilan arac kiralama global ismi ile "rent a car" artik bircok kisinin maddi oldugu kadar zamandan da tasarruf etmesini sagliyor. Gelisen turizm ise araç kiralama hizmetinin en büyük destekci. Dün-yanin neresinde olursa olsun toplu tasima araclarina binmek yerine kendine zel bir arabaya binmek isteyenlerin tercihi olan kiralk araclar, seyahat boyunca ozgür olma imkàni da veriyor.
Arac kiralama sadece seyahat ederken degil günlik hayatta da oldukça tercih edilen bir hizmet haline geldi. Arac satin almak, vergi ve kasko odemek, arac bakimina zaman ayirmak gibi bircok bashiktan kullaniciyr kurtaran arac kiralama hizmeti ani zamanda istenilen arabaya binme sansi da taniyor. Ister her daim sizinle olan bir araba olsun isterseniz de sadece ozel günlerinizde araba ihtiyaciniz olsun Kiralacar.com, binlerce araci hizmetinize sunuyor. Bu araclar icinden kolayca seciminizi yapip rezervasyonunuzu olusturabilir ve istediginiz arac
<a v-if="metinController==false" @click="metinController=true" class="text22"> Devamı...</a></div>
<div class="text21" v-if="metinController==true">Günümüzde arac satin almanin zorlugu geek bireysel gerekse de kurumsal firmalari arac kiralama hizmetine yonlendirdi. Dünya capinda da oldukça yaygin olarak kullanilan arac kiralama global ismi ile "rent a car" artik bircok kisinin maddi oldugu kadar zamandan da tasarruf etmesini sagliyor. Gelisen turizm ise araç kiralama hizmetinin en büyük destekci. Dün-yanin neresinde olursa olsun toplu tasima araclarina binmek yerine kendine zel bir arabaya binmek isteyenlerin tercihi olan kiralk araclar, seyahat boyunca ozgür olma imkàni da veriyor.
Arac kiralama sadece seyahat ederken degil günlik hayatta da oldukça tercih edilen bir hizmet haline geldi. Arac satin almak, vergi ve kasko odemek, arac bakimina zaman ayirmak gibi bircok bashiktan kullaniciyr kurtaran arac kiralama hizmeti ani zamanda istenilen arabaya binme sansi da taniyor. Ister her daim sizinle olan bir araba olsun isterseniz de sadece ozel günlerinizde araba ihtiyaciniz olsun Kiralacar.com, binlerce araci hizmetinize sunuyor. Bu araclar icinden kolayca seciminizi yapip rezervasyonunuzu olusturabilir ve istediginiz arac
<a v-if="metinController==true" @click="metinController=false" class="text22"> Gizle...</a></div>
  </div><!--Açıklama bitiş-->



  </div><!--center bitiş-->

  <FooterApp/>

</template>

<script >
import { ref, onMounted } from 'vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination} from 'vue3-carousel'


import deskopCar from './componentsAnaSayfa/deskopCar.vue';
import tabletCar from './componentsAnaSayfa/tabletCar.vue';
import deskopCards from './componentsAnaSayfa/deskopCards.vue';
import deskopLokasyonlar from './componentsAnaSayfa/deskopLokasyonlar.vue';
import tabletLokasyonlar from './componentsAnaSayfa/tabletLokasyonlar.vue';

import FooterApp from './FooterApp.vue';
export default {
  name: "AnaSayfa",
  components: {
    FooterApp,
    Carousel,
    Slide,
    Pagination,
    tabletLokasyonlar ,
    deskopLokasyonlar,
    deskopCards,
    tabletCar,
    deskopCar,
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
.background{
  background: url("@/images/AnaSayfa/background.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 100vh;/*739px*/
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
  font-size: 0.6669vw;
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

</style>