<template>
    <!--Cards kısmı-->
    <div class="center" style="margin-top:5vh">
      <div class="text17" style="margin-bottom:1vh"><b>Popüler Havalimanları</b></div>
      <div v-if="planeController==true">
    

        <div class="space" style="margin-top:1rem">
    
            <div class="row g-0">
             
              <div class="col-7" style="padding-top:2vh">
                <div class="text11" >İstanbul - Avrupa</div>
        <div class="text10" >Istanbul Havalimanı [IST]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12" >240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7">Hemen Kirala</button>
              </div>
              <div class="col-5" >
                <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto" class="image">
              </div>
 
          </div>
        </div>
    <div class="space" style="margin-top:1rem">
    <div class="row g-0">
      <div class="col-7" style="padding-top:2vh">
        <div class="text11">İzmir</div>
        <div class="text10">Adnan Menderes H.L [ADB]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      <div class="col-5" >
        <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto " class="image">
      </div>
    </div>
    </div>
    <div class="space" style="margin-top:1rem">
    <div class="row g-0">
      <div class="col-7" style="padding-top:2vh">
        <div class="text11">Antalya</div>
        <div class="text10">Antalya Havalimanı [AYT]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      <div class="col-5" s>
        <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto" class="image">
      </div>
    </div>
    </div>
    <div class="space" style="margin-top:1rem">
    <div class="row g-0">
      <div class="col-7" style="padding-top:2vh">
        <div class="text11">İstanbul - Asya</div>
        <div class="text10">Sabiha Gökçen H.L [SAW]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em"/></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      <div class="col-5" >
        <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto" class="image">
      </div>
    </div>
    </div>
  </div>
  <div class="text7" style="float:right;margin-top:0.5vh"><a href="#">Tüm Lokasyonları Gör <font-awesome-icon icon="fa-solid fa-chevron-right" style="margin-right: 0.5vw;"/></a></div>

</div><!--cards bitiş-->
</template>

<script >

export default {
name: "AnaSayfa",
components: {

},
data() {
  return {
    planeController:true,
  }
},

methods: {
  
},
}
</script>

<style scoped>
.center{
  margin:0 auto;
  width: 90%;/*1220px*/
  z-index: 4;
  position: relative;
  align-items: center;
}
.space{
background-color: #ada6d6;
width: 90vw;
height: 15vh;
margin-top:2vh;
}
.text7{
position: relative;
font-family: "Quicksand" ;
font-size: 3vw;
color: #2a2a2a;
margin-top: 5vh;
float: center;
margin-bottom: 1vh;
}

.text10{
position: relative;
font-family: "Quicksand" ;
font-size: 3vw;/*15pt*/
color: #2a2a2a;
text-align: right;

line-height: 1rem;

}
.text11{
position: relative;
font-family: "Quicksand" ;
font-size: 4vw;/*15pt*/
color: #ffffff;
text-align: right;

line-height: 1rem;
}
.text12{
position: relative;
font-family: "Quicksand" ;
font-size:2.5vw;/*15pt*/
color: #ffffff;
text-align: right;

}
.text17{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 4vw;/*15pt*/
    color: #4e5e7c;
    text-align: left;
    margin-right: 0.8em;
  
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
margin-top: 0vh;
border-radius: 3px;
}

.center{
  margin:0 auto;
  width: 90%;/*1220px*/
  z-index: 4;
  position: relative;
  align-items: center;
}
.image{
width:17vh;
float:center;
padding-top: 1vh;
}
</style>