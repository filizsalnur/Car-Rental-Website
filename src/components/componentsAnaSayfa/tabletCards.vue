<template>
  <div class="center">
    <div class="container" style="margin-top:3em;"><!--Cards kısmı-->
    <div class="row g-0">
    <div class="col-12">
      <div class="text7">Popüler Havalimanları</div>
    </div>
    </div>
    <div class="row g-1">
    <div class="col-6">
      <div class="card " style="border:0; margin:0;padding: 0;">
      <img src="@/images/AnaSayfa/plane1.png" class="card-img" alt="icon" >
      <div class="card-img-overlay">
        <div class="row"><div class="col-6">       
        <div class="text11" >İstanbul - Avrupa</div>
        <div class="text10" >Istanbul Havalimanı [IST]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12" >240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7">Hemen Kirala</button></div>
        <div class="col-6"></div></div>
      </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card "  style="border:0; margin:0;padding: 0;">
      <img src="@/images/AnaSayfa/plane2.png" class="card-img" alt="icon">
      <div class="card-img-overlay">
        <div class="text11">Ankara</div>
        <div class="text10">Esenboğa Havalimanı [ESB]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card ">
      <img src="@/images/AnaSayfa/plane3.png" class="card-img" alt="icon">
      <div class="card-img-overlay">
        <div class="text11">İzmir</div>
        <div class="text10">Adnan Menderes H.L [ADB]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      </div>
    </div>
  </div>
  <div class="row g-1" style="margin-top: 0.2rem;">
    <div class="col-3">
      <div class="card ">
      <img src="@/images/AnaSayfa/plane4.png" class="card-img" alt="icon">
      <div class="card-img-overlay">
        <div class="text11">Antalya</div>
        <div class="text10">Antalya Havalimanı [AYT]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card ">
      <img src="@/images/AnaSayfa/plane5.png" class="card-img" alt="icon">
      <div class="card-img-overlay">
      </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card ">
      <img src="@/images/AnaSayfa/plane6.png" class="card-img" alt="icon">
      <div class="card-img-overlay">
        <div class="text11">İstanbul - Asya</div>
        <div class="text10">Sabiha Gökçen Havalimanı [SAW]<font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-left:0.5em;"/></div>
        <div class="text12">240 TL'den Başlayan Fiyatlarla</div>
        <button class="button7" >Hemen Kirala</button>
      </div>
      </div>
    </div>
  </div>
</div>
<div style="float:right;margin-top:0.5vh"><a href="#">Tüm Havalimanlarını Gör <font-awesome-icon icon="fa-solid fa-chevron-right" style="margin-right: 0.5vw;"/></a></div>

  </div><!--cards bitiş-->
</template>

<script >

export default {
name: "AnaSayfa",
components: {

},
data() {
  return {
    
  }
},

methods: {
  
},
}
</script>

<style scoped>

.text7{
position: relative;
font-family: "Quicksand" ;
font-size: 19pt;
color: #2a2a2a;
margin-top: 30px;
float: left;

}

.text10{
position: relative;
font-family: "Quicksand" ;
font-size: 0.6vw;/*15pt*/
color: #2a2a2a;
text-align: right;
margin-right: 0.8em;


}
.text11{
position: relative;
font-family: "Quicksand" ;
font-size: 10pt;/*15pt*/
color: #ffffff;
text-align: right;
margin-right: 0.8em;
margin-top: -1vh;
}
.text12{
position: relative;
font-family: "Quicksand" ;
font-size: 0.6vw;/*15pt*/
color: #ffffff;
text-align: right;
margin-right: 0.8em;
}

.button7 {
height: 30px;/*34px*/
width : 90px;/*126px*/
background-color: transparent;
color: #ffffff;
border: 2px solid #ffffff;
font-family: "Quicksand" ;
font-size: 8pt;
float: right;
margin-right: 0.8em;
margin-top: 0.5vh;
border-radius: 3px;
}
@media screen and (min-width:740px) and (max-width:821px){
  .center{
  margin:0 auto;
  width: 90%;/*1220px*/
  z-index: 2;
  position: relative;
  align-items: center;
}
  }
@media screen and (min-width:822px) and (max-width:1094px){
  .center{
  margin:0 auto;
  width: 80%;/*1220px*/
  z-index: 2;
  position: relative;
  align-items: center;
}
  }
  @media screen and (min-width:1095px){
    .center{
  margin:0 auto;
  width: 60%;/*1220px*/
  z-index: 2;
  position: relative;
  align-items: center;
}
}
</style>