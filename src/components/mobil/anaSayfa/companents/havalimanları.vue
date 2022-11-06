<template>
    <!--Cards kısmı-->
    <div class="center">
      <div class="text7" @click="planeController=true" style="margin-top:3em;"><b>Popüler Havalimanları</b></div>
      <div v-if="planeController==true">
    

        <div class="space" style="margin-top:1rem">
    
            <div class="row g-0">
             
              <div class="col-7" style="padding-top:2vh">
                <div class="text11" >İstanbul - Avrupa</div>
        <div class="text10" >Istanbul Havalimanı [IST]<img src="@/images/AnaSayfa/planeIcon.png" alt="icon"  style="margin-left:0.5em;height: 1rem;width: 1rem"></div>
        <div class="text12" >240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7">Hemen Kirala</button>
              </div>
              <div class="col-5" style="padding-top:2vh">
                <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto">
              </div>
 
          </div>
        </div>
    <div class="space" style="margin-top:1rem">
    <div class="row g-0">
      <div class="col-7" style="padding-top:2vh">
        <div class="text11">İzmir</div>
        <div class="text10">Adnan Menderes H.L [ADB]<img src="@/images/AnaSayfa/planeIcon.png" alt="icon" style="margin-left:0.5em;height: 1rem;width: 1rem"></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      <div class="col-5" style="padding-top:2vh">
        <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto">
      </div>
    </div>
    </div>
    <div class="space" style="margin-top:1rem">
    <div class="row g-0">
      <div class="col-7" style="padding-top:2vh">
        <div class="text11">Antalya</div>
        <div class="text10">Antalya Havalimanı [AYT]<img src="@/images/AnaSayfa/planeIcon.png" alt="icon"  style="margin-left:0.5em;height: 1rem;width: 1rem"></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      <div class="col-5" style="padding-top:2vh">
        <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto">
      </div>
    </div>
    </div>
    <div class="space" style="margin-top:1rem">
    <div class="row g-0">
      <div class="col-7" style="padding-top:2vh">
        <div class="text11">İstanbul - Asya</div>
        <div class="text10">Sabiha Gökçen H.L [SAW]<img src="@/images/AnaSayfa/planeIcon.png" alt="icon"  style="margin-left:0.5em;height: 1rem;width: 1rem"></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      <div class="col-5" style="padding-top:2vh">
        <img src="@/images/mobil/AnaSayfa/plane.png" alt="..." style="margin:0 auto">
      </div>
    </div>
    </div>
  </div>
  <a class="text7" href="#">Tüm Havalimanlarıni Gör</a>
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
font-size: 4vw;
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
</style>