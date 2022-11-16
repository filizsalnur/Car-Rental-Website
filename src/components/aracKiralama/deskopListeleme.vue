<template>

<div class="center" style="margin-top:26px">

  <div class="space" >
    <div class="space2" >
      <div class="space" style="margin-top:10px;padding-bottom:10px;border-bottom:1px solid black;">
            <div class="text1" ><a href="#">Filtre Uygula</a></div>
            <div class="text1" style="margin-right:1vw"> Filtreyi Temizle</div>
      </div>
      <!--Fiyat Aralığı-->
      <div class="main" v-if="fiyatController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="fiyatController=true">
        <b>Fiyat Aralığı <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="fiyatController==true" class="dropdown">
      <div class="text2" style="margin-right:1vw;padding-top: 5px;"  @click="fiyatController=false"><b>Fiyat Aralığı <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;" /></b></div>
      <div class="space" style="margin-top:10px;padding-bottom:10px;border-bottom:1px solid black;">
            <div class="text1"><input type="text" id="min" placeholder="En Az" class="button4"></div>
            <div class="text1"><input type="text" id="max" placeholder="En Çok" class="button4"></div>
       
              
              <div v-if="fiyatForm==false" @click="fiyatForm=true"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 1vw;"/></div>
        <div v-if="fiyatForm==true" @click="fiyatForm=false"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 1vw;"/></div>
           
    </div>
  </div>
 <!--Vites Tipi-->
 <div class="main" v-if="vitesController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="vitesController=true">
        <b>Vites Tipi <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="vitesController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="vitesController=false"><b>Vites Tipi <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row">
        <div class="col-6">            
        <div v-if="vites1Form==false" @click="vites1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Otomatik</div>
        <div v-if="vites1Form==true" @click="vites1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Otomatik</div>
        </div>
      
        <div class="col-6">
          <div v-if="vites2Form==false" @click="vites2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Manuel</div>
        <div v-if="vites2Form==true" @click="vites2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Manuel</div>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="vites3Form==false" @click="vites3Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Triptonik</div>
        <div v-if="vites3Form==true" @click="vites3Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Triptonik</div>
        </div>
        <div class="col-6">
          <div v-if="vitesAllForm==false && (vites1Form==false || vites2Form==false || vites3Form==false) " @click="vitesAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(vites1Form==true && vites2Form==true && vites3Form==true) || vitesAllForm==true" @click="vitesNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
      </div>
</div>
</div>
 <!--Yakıt Tipi-->
 <div class="main" v-if="yakitController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="yakitController=true">
        <b>Yakıt Tipi <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="yakitController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="yakitController=false"><b>Yakıt Tipi <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="yakit1Form==false" @click="yakit1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Benzin</div>
        <div v-if="yakit1Form==true" @click="yakit1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Benzin</div>
        </div>
      
        <div class="col-6">
          <div v-if="yakit2Form==false" @click="yakit2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Dizel</div>
        <div v-if="yakit2Form==true" @click="yakit2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Dizel</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="yakit3Form==false" @click="yakit3Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Hibrit</div>
        <div v-if="yakit3Form==true" @click="yakit3Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Hibrit</div>
        </div>
      
        <div class="col-6">
          <div v-if="yakit4Form==false" @click="yakit4Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>LPG</div>
        <div v-if="yakit4Form==true" @click="yakit4Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>LPG</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="yakit5Form==false" @click="yakit5Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Elektrik</div>
        <div v-if="yakit5Form==true" @click="yakit5Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Elektrik</div>
        </div>
      
        <div class="col-6">
          <div v-if="yakit6Form==false" @click="yakit6Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Benzin-LPG</div>
        <div v-if="yakit6Form==true" @click="yakit6Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Benzin-LPG</div>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="yakitAllForm==false && (yakit1Form==false || yakit2Form==false || yakit3Form==false || yakit4Form==false || yakit5Form==false || yakit6Form==false) " @click="yakitAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(yakit1Form==true && yakit2Form==true && yakit3Form==true && yakit4Form==true && yakit5Form==true && yakit6Form==true) || yakitAllForm==true" @click="yakitNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
        <div class="col-6">
        </div>
      </div>
</div>
</div>
 <!--Araç Sınıfı-->
 <div class="main" v-if="sinifController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="sinifController=true">
        <b>Araç Sınıfı <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="sinifController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="sinifController=false"><b>Araç Sınıfı <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="padding-top: 5px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="sinif1Form==false" @click="sinif1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Comfort</div>
        <div v-if="sinif1Form==true" @click="sinif1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Comfort</div>
        </div>
      
        <div class="col-6">
          <div v-if="sinif2Form==false" @click="sinif2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Ekonomi</div>
        <div v-if="sinif2Form==true" @click="sinif2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Ekonomi</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="sinif3Form==false" @click="sinif3Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>SUV(77)</div>
        <div v-if="sinif3Form==true" @click="sinif3Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>SUV(77)</div>
        </div>
      
        <div class="col-6">
          <div v-if="sinif4Form==false" @click="sinif4Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Premium(7)</div>
        <div v-if="sinif4Form==true" @click="sinif4Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Premium(7)</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="sinif5Form==false" @click="sinif5Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Combi</div>
        <div v-if="sinif5Form==true" @click="sinif5Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Combi</div>
        </div>
      
        <div class="col-6">
          <div v-if="sinif6Form==false" @click="sinif6Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Minivan</div>
        <div v-if="sinif6Form==true" @click="sinif6Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Minivan</div>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="sinifAllForm==false && (sinif1Form==false || sinif2Form==false || sinif3Form==false || sinif4Form==false || sinif5Form==false || sinif6Form==false) " @click="sinifAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(sinif1Form==true && sinif2Form==true && sinif3Form==true && sinif4Form==true && sinif5Form==true && sinif6Form==true) || sinifAllForm==true" @click="sinifNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
        <div class="col-6">
        </div>
      </div>
</div>
</div>
<!--Markalar-->
<div class="main" v-if="markaController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="markaController=true">
        <b>Markalar <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="markaController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="markaController=false"><b>Markalar <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="marka1Form==false" @click="marka1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Seat(6)</div>
        <div v-if="marka1Form==true" @click="marka1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Seat(6)</div>
        </div>
      
        <div class="col-6">
          <div v-if="marka2Form==false" @click="marka2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Opel(24)</div>
        <div v-if="marka2Form==true" @click="marka2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Opel(24)</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="marka3Form==false" @click="marka3Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Volvo</div>
        <div v-if="marka3Form==true" @click="marka3Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Volvo</div>
        </div>
      
        <div class="col-6">
          <div v-if="marka4Form==false" @click="marka4Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Volkswagen(13)</div>
        <div v-if="marka4Form==true" @click="marka4Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Volkswagen(13)</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="marka5Form==false" @click="marka5Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Toyota(33)</div>
        <div v-if="marka5Form==true" @click="marka5Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Toyota(33)</div>
        </div>
      
        <div class="col-6">
          <div v-if="marka6Form==false" @click="marka6Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Skoda</div>
        <div v-if="marka6Form==true" @click="marka6Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Skoda</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="marka7Form==false" @click="marka7Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Peugeot(14)</div>
        <div v-if="marka7Form==true" @click="marka7Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Peugeot(14)</div>
        </div>
      
        <div class="col-6">
          <div v-if="marka8Form==false" @click="marka8Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Mazda(14)</div>
        <div v-if="marka8Form==true" @click="marka8Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Mazda(14)</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="marka9Form==false" @click="marka9Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Renault</div>
        <div v-if="marka9Form==true" @click="marka9Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Renault</div>
        </div>
      
        <div class="col-6">
          <div v-if="marka10Form==false" @click="marka10Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Nissan</div>
        <div v-if="marka10Form==true" @click="marka10Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Nissan</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="marka11Form==false" @click="marka11Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>BMW</div>
        <div v-if="marka11Form==true" @click="marka11Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>BMW</div>
        </div>
      
        <div class="col-6">
          <div v-if="marka12Form==false" @click="marka12Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Audi</div>
        <div v-if="marka12Form==true" @click="marka12Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Audi</div>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="markaAllForm==false && (marka1Form==false || marka2Form==false || marka3Form==false || marka4Form==false || marka5Form==false || marka6Form==false || marka7Form==false || marka8Form==false || marka9Form==false || marka10Form==false || marka11Form==false || marka12Form==false) " @click="markaAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(marka1Form==true && marka2Form==true && marka3Form==true && marka4Form==true && marka5Form==true && marka6Form==true && marka7Form==true && marka8Form==true && marka9Form==true && marka10Form==true && marka11Form==true && marka12Form==true) || markaAllForm==true" @click="markaNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
        <div class="col-6">
        </div>
      </div>
</div>
      </div>
<!--KM Sınırı-->
<div class="main" v-if="kmController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="kmController=true">
        <b>KM Sınırı <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="kmController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="kmController=false"><b>KM Sınırı <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="km1Form==false" @click="km1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>1500-2000</div>
        <div v-if="km1Form==true" @click="km1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>1500-2000</div>
        </div>
      
        <div class="col-6">
          <div v-if="km2Form==false" @click="km2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>1500-2000</div>
        <div v-if="km2Form==true" @click="km2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>1500-2000</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="km3Form==false" @click="km3Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>1500-2000</div>
        <div v-if="km3Form==true" @click="km3Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>1500-2000</div>
        </div>
      
        <div class="col-6">
          <div v-if="km4Form==false" @click="km4Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>1500-2000</div>
        <div v-if="km4Form==true" @click="km4Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>1500-2000</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="km5Form==false" @click="km5Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>1500-2000</div>
        <div v-if="km5Form==true" @click="km5Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>1500-2000</div>
        </div>
      
        <div class="col-6">
          <div v-if="km6Form==false" @click="km6Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>1500-2000</div>
        <div v-if="km6Form==true" @click="km6Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>1500-2000</div>
        </div>
</div>

      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="kmAllForm==false && (km1Form==false || km2Form==false || km3Form==false || km4Form==false || km5Form==false || km6Form==false) " @click="kmAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(km1Form==true && km2Form==true && km3Form==true && km4Form==true && km5Form==true && km6Form==true) || kmAllForm==true" @click="kmNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
        <div class="col-6">
        </div>
      </div>
</div>
      </div>
 <!--Deposito Bedeli-->
 <div class="main" v-if="depositoController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="depositoController=true">
        <b>Deposito Bedeli <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="depositoController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="depositoController=false"><b>Deposito Bedeli <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="space" style="margin-top:10px;padding-bottom:10px;border-bottom:1px solid black;">
            <div class="text1"><input type="text" id="min" placeholder="En Az" class="button4"></div>
            <div class="text1"><input type="text" id="max" placeholder="En Çok" class="button4"></div>
            <div v-if="depositoForm==false" @click="depositoForm=true"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 1vw;"/></div>
        <div v-if="depositoForm==true" @click="depositoForm=false"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 1vw;"/></div>
    </div>
  </div>
<!--Kredi Kartı-->
<div class="main" v-if="kartController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="kartController=true">
        <b>Kredi Kartı Zorunluluğu <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="kartController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="kartController=false"><b>Kredi Kartı Zorunluluğu <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="kart1Form==false" @click="kart1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Evet</div>
        <div v-if="kart1Form==true" @click="kart1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Evet</div>
        </div>
      
        <div class="col-6">
          <div v-if="kart2Form==false" @click="kart2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Hayır</div>
        <div v-if="kart2Form==true" @click="kart2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Hayır</div>
        </div>


      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="kmAllForm==false && (kart1Form==false || kart2Form==false ) " @click="kartAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(kart1Form==true && kart2Form==true) || kartAllForm==true" @click="kartNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
        <div class="col-6">
        </div>
      </div>
</div>
      </div>
    </div>

<!--Kiralama Firmaları-->
<div class="main" v-if="firmaController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="firmaController=true">
        <b>Kiralama Firmaları <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="firmaController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="firmaController=false"><b>Kiralama Firmaları <font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="firma1Form==false" @click="firma1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Çizgi</div>
        <div v-if="firma1Form==true" @click="firma1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Çizgi</div>
        </div>
      
        <div class="col-6">
          <div v-if="firma2Form==false" @click="firma2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Nissa</div>
        <div v-if="firma2Form==true" @click="firma2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Nissa</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="firma3Form==false" @click="firma3Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Central</div>
        <div v-if="firma3Form==true" @click="firma3Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Central</div>
        </div>
      
        <div class="col-6">
          <div v-if="firma4Form==false" @click="firma4Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Asist(24)</div>
        <div v-if="firma4Form==true" @click="firma4Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Asist(24)</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="firma5Form==false" @click="firma5Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Rentgo(9)</div>
        <div v-if="firma5Form==true" @click="firma5Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Rentgo(9)</div>
        </div>
      
        <div class="col-6">
          <div v-if="firma6Form==false" @click="firma6Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Novacar</div>
        <div v-if="firma6Form==true" @click="firma6Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Novacar</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="firma7Form==false" @click="firma7Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Kar Rent</div>
        <div v-if="firma7Form==true" @click="firma7Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Kar Rent</div>
        </div>
      
        <div class="col-6">
          <div v-if="firma8Form==false" @click="firma8Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>7/24 Rent</div>
        <div v-if="firma8Form==true" @click="firma8Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>7/24 Rent</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="firma9Form==false" @click="firma9Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Green Motion</div>
        <div v-if="firma9Form==true" @click="firma9Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Green Motion</div>
        </div>
      
        <div class="col-6">
          <div v-if="firma10Form==false" @click="firma10Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>DMR Car</div>
        <div v-if="firma10Form==true" @click="firma10Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>DMR Car</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="firma11Form==false" @click="firma11Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Circular</div>
        <div v-if="firma11Form==true" @click="firma11Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Circular</div>
        </div>
      
        <div class="col-6">
          <div v-if="firma12Form==false" @click="firma12Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Caraj</div>
        <div v-if="firma12Form==true" @click="firma12Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Caraj</div>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="firmaAllForm==false && (firma1Form==false || firma2Form==false || firma3Form==false || firma4Form==false || firma5Form==false || firma6Form==false || firma7Form==false || firma8Form==false || firma9Form==false || firma10Form==false  || firma11Form==false || firma12Form==false) " @click="firmaAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(firma1Form==true && firma2Form==true && firma3Form==true && firma4Form==true && firma5Form==true && firma6Form==true && firma7Form==true && firma8Form==true && firma9Form==true && firma10Form==true && firma11Form==true && firma12Form==true) || firmaAllForm==true" @click="firmaNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
        <div class="col-6">
        </div>
      </div>
      </div>
    </div>
      <!--Teslimat Noktası-->
      <div class="main" v-if="teslimatController==false"><div class="text2" style="margin-right:1vw;padding-top:5px;" @click="teslimatController=true">
        <b>Teslimat Noktası <font-awesome-icon icon="fa-solid fa-chevron-down" style="margin-left: 5px;"/></b></div></div>
      <div v-if="teslimatController==true" class="dropdown">
 <div class="text2" style="margin-right:1vw;padding-top: 5px;" @click="teslimatController=false"><b>Teslimat Noktası<font-awesome-icon icon="fa-solid fa-chevron-up" style="margin-left: 5px;"/></b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="teslimat1Form==false" @click="teslimat1Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Acenta Ofisi</div>
        <div v-if="teslimat1Form==true" @click="teslimat1Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Acenta Ofisi</div>        
      </div>
      
        <div class="col-6">
          <div v-if="teslimat2Form==false" @click="teslimat2Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Vale Hizmeti</div>
        <div v-if="teslimat2Form==true" @click="teslimat2Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Vale Hizmeti</div>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
            <div v-if="teslimat3Form==false" @click="teslimat3Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Terminal İçi</div>
        <div v-if="teslimat3Form==true" @click="teslimat3Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Terminal İçi</div>
        </div>
      
        <div class="col-6">
          <div v-if="teslimat4Form==false" @click="teslimat4Form=true" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Terminal Dışı</div>
        <div v-if="teslimat4Form==true" @click="teslimat4Form=false" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Terminal Dışı</div>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
          <div v-if="teslimatAllForm==false && (teslimat1Form==false || teslimat2Form==false || teslimat3Form==false || teslimat4Form==false ) " @click="teslimatAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 0.5vw;"/>Tümü</div>
        <div v-if="(teslimat1Form==true && teslimat2Form==true && teslimat3Form==true && teslimat4Form==true ) || teslimatAllForm==true" @click="teslimatNotAll()" class="text3"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 0.5vw;"/>Tümü</div>
        </div>
        <div class="col-6">
        </div>
      </div>
      </div>
    </div>
</div>

    <div class="space3" >
      <div class="space">
        <div class="text1" style="padding-left:2vw;">Listelenen 344</div>
       
      <div> <div class="box"><div class="space">
          <div class="text4"> Rezervasyolarınızda ücretsiz iptal ve anında ücret iadesi imkanı |</div>
          <div class="text5"><b>Promosyon Kodu Kullan</b></div>
      </div></div></div><button class="button3">Sıra : En Düşük Fiyat</button>
      </div>
      <div class="space">
      <div class="text4" style="padding-left:2vw;margin-top: 2vh;"><b>Hızlı Filtrele</b></div>
      <div v-if="otomatikFiltre==false"><button class="button5" @click="filtreOtomatik()"><b>Otomatik</b></button></div>
      <div v-if="otomatikFiltre==true"><button class="button6" @click="filtreNotOtomatik()"><b>Otomatik</b></button></div>
      <div v-if="manuelFiltre==false"><button class="button5" @click="filtreManuel()"><b>Manuel</b></button></div>
      <div v-if="manuelFiltre==true"><button class="button6" @click="filtreNotManuel()"><b>Manuel</b></button></div>
      <div v-if="benzinFiltre==false"><button class="button5" @click="filtreBenzin()"><b>Benzin</b></button></div>
      <div v-if="benzinFiltre==true"><button class="button6" @click="filtreNotBenzin()"><b>Benzin</b></button></div>
      <div v-if="SUVFiltre==false"><button class="button5" @click="filtreSUV()"><b>SUV</b></button></div>
      <div v-if="SUVFiltre==true"><button class="button6" @click="filtreNotSUV()"><b>SUV</b></button></div>
      <div v-if="ekonomiFiltre==false"><button class="button5" @click="filtreEkonomi()"><b>Ekonomi</b></button></div>
      <div v-if="ekonomiFiltre==true"><button class="button6" @click="filtreNotEkonomi()"><b>Ekonomi</b></button></div>
    </div>
    </div>
  </div>
</div>


</template>

<script >
import { ref, onMounted } from 'vue';




export default {
  name: "aracListeleme",
  components: {
    
  },
  data() {
    return {
      fiyatController:false,
      vitesController:false,
      yakitController:false,
      sinifController:false,
      markaController:false,
      kmController:false,
      depositoController:false,
      kartController:false,
      firmaController:false,
      teslimatController:false,
      fiyatForm:false,
      vites1Form:false,
      vites2Form:false,
      vites3Form:false,
      vitesAllForm:false,
      yakit1Form:false,
      yakit2Form:false,
      yakit3Form:false,
      yakit4Form:false,
      yakit5Form:false,
      yakit6Form:false,
      yakitAllForm:false,
      sinif1Form:false,
      sinif2Form:false,
      sinif3Form:false,
      sinif4Form:false,
      sinif5Form:false,
      sinif6Form:false,
      sinifAllForm:false,
      marka1Form:false,
      marka2Form:false,
      marka3Form:false,
      marka4Form:false,
      marka5Form:false,
      marka6Form:false,
      marka7Form:false,
      marka8Form:false,
      marka9Form:false,
      marka10Form:false,
      marka11Form:false,
      marka12Form:false,
      markaAllForm:false,
      km1Form:false,
      km2Form:false,
      km3Form:false,
      km4Form:false,
      km5Form:false,
      km6Form:false,
      kmAllForm:false,
      depositoForm:false,
      kart1Form:false,
      kart2Form:false,
      kartAllForm:false,
      firma1Form:false,
      firma2Form:false,
      firma3Form:false,
      firma4Form:false,
      firma5Form:false,
      firma6Form:false,
      firma7Form:false,
      firma8Form:false,
      firma9Form:false,
      firma10Form:false,
      firma11Form:false,
      firma12Form:false,
      firmaAllForm:false,
      teslimat1Form:false,
      teslimat2Form:false,
      teslimat3Form:false,
      teslimat4Form:false,
      teslimatAllForm:false,
      otomatikFiltre:false,
      manuelFiltre:false,
      benzinFiltre:false,
      dizelFiltre:false,
      SUVFiltre:false,
      ekonomiFiltre:false,
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
    vitesAll(){
      this.vites1Form=true;
      this.vites2Form=true;
      this.vites3Form=true;
      this.vitesAllForm=true;
    },
    vitesNotAll(){
      this.vites1Form=false;
      this.vites2Form=false;
      this.vites3Form=false;
      this.vitesAllForm=false;
    },
    yakitAll(){
      this.yakit1Form=true;
      this.yakit2Form=true;
      this.yakit3Form=true;
      this.yakit4Form=true;
      this.yakit5Form=true;
      this.yakit6Form=true;
      this.yakitAllForm=true;
    },
    yakitNotAll(){
      this.yakit1Form=false;
      this.yakit2Form=false;
      this.yakit3Form=false;
      this.yakit4Form=false;
      this.yakit5Form=false;
      this.yakit6Form=false;
      this.yakitAllForm=false;
    },
    sinifAll(){
      this.sinif1Form=true;
      this.sinif2Form=true;
      this.sinif3Form=true;
      this.sinif4Form=true;
      this.sinif5Form=true;
      this.sinif6Form=true;
      this.sinifAllForm=true;
    },
    sinifNotAll(){
      this.sinif1Form=false;
      this.sinif2Form=false;
      this.sinif3Form=false;
      this.sinif4Form=false;
      this.sinif5Form=false;
      this.sinif6Form=false;
      this.sinifAllForm=false;
    },
    markaAll(){
      this.marka1Form=true;
      this.marka2Form=true;
      this.marka3Form=true;
      this.marka4Form=true;
      this.marka5Form=true;
      this.marka6Form=true;
      this.marka7Form=true;
      this.marka8Form=true;
      this.marka9Form=true;
      this.marka10Form=true;
      this.marka11Form=true;
      this.marka12Form=true;
      this.markaAllForm=true;
    },
    markaNotAll(){
      this.marka1Form=false;
      this.marka2Form=false;
      this.marka3Form=false;
      this.marka4Form=false;
      this.marka5Form=false;
      this.marka6Form=false;
      this.marka7Form=false;
      this.marka8Form=false;
      this.marka9Form=false;
      this.marka10Form=false;
      this.marka11Form=false;
      this.marka12Form=false;
      this.markaAllForm=false;
    },
    kmAll(){
      this.km1Form=true;
      this.km2Form=true;
      this.km3Form=true;
      this.km4Form=true;
      this.km5Form=true;
      this.km6Form=true;
      this.kmAllForm=true;
    },
    kmNotAll(){
      this.km1Form=false;
      this.km2Form=false;
      this.km3Form=false;
      this.km4Form=false;
      this.km5Form=false;
      this.km6Form=false;
      this.kmAllForm=false;
    },
    kartAll(){
      this.kart1Form=true;
      this.kart2Form=true;
      this.kartAllForm=true;
    },
    kartNotAll(){
      this.kart1Form=false;
      this.kart2Form=false;
      this.kartAllForm=false;
    },
    firmaAll(){
      this.firma1Form=true;
      this.firma2Form=true;
      this.firma3Form=true;
      this.firma4Form=true;
      this.firma5Form=true;
      this.firma6Form=true;
      this.firma7Form=true;
      this.firma8Form=true;
      this.firma9Form=true;
      this.firma10Form=true;
      this.firma11Form=true;
      this.firma12Form=true;
      this.firmaAllForm=true;
    },
    firmaNotAll(){
      this.firma1Form=false;
      this.firma2Form=false;
      this.firma3Form=false;
      this.firma4Form=false;
      this.firma5Form=false;
      this.firma6Form=false;
      this.firma7Form=false;
      this.firma8Form=false;
      this.firma9Form=false;
      this.firma10Form=false;
      this.firma11Form=false;
      this.firma12Form=false;
      this.firmaAllForm=false;
    },
    teslimatAll(){
      this.teslimat1Form=true;
      this.teslimat2Form=true;
      this.teslimat3Form=true;
      this.teslimat4Form=true;
      this.teslimatAllForm=true;
    },
    teslimatNotAll(){
      this.teslimat1Form=false;
      this.teslimat2Form=false;
      this.teslimat3Form=false;
      this.teslimat4Form=false;
      this.teslimatAllForm=false;
    },
    filtreOtomatik(){
      this.otomatikFiltre=true;
      this.vites1Form=true;
      this.vitesController=true;
    },
    filtreNotOtomatik(){
      this.otomatikFiltre=false;
      this.vites1Form=false;
    },
    filtreManuel(){
      this.manuelFiltre=true;
      this.vites2Form=true;
      this.vitesController=true;
    },
    filtreNotManuel(){
      this.manuelFiltre=false;
      this.vites2Form=false;
    },
    filtreBenzin(){
      this.benzinFiltre=true;
      this.yakit1Form=true;
      this.yakitController=true;
    },
    filtreNotBenzin(){
      this.benzinFiltre=false;
      this.yakit1Form=false;
    },
    filtreDizel(){
      this.dizelFiltre=true;
      this.yakit2Form=true;
      this.yakitController=true;
    },
    filtreNotDizel(){
      this.dizelFiltre=false;
      this.yakit2Form=false;
    },
    filtreSUV(){
      this.SUVFiltre=true;
      this.sinif3Form=true;
      this.sinifController=true;
    },
    filtreNotSUV(){
      this.SUVFiltre=false;
      this.sinif3Form=false;
    },
    filtreEkonomi(){
      this.ekonomiFiltre=true;
      this.sinif2Form=true;
      this.sinifController=true;
    },
    filtreNotEkonomi(){
      this.ekonomiFiltre=false;
      this.sinif2Form=false;
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
.space{
  display:flex;
    justify-content: space-between;
    align-items: center;
}
.space2 {
position: relative;
width:17vw;
align-self: flex-start;
z-index: 1;


}
.space3 {
position: relative;
width:43vw;

z-index: 1;
align-self: flex-start;
}
.main{
  position: relative;
width:17vw;
height: 30px;
z-index: 1;
border-bottom: 1px solid black;
border-right: 1px solid black;
}
.dropdown{
  border-right: 1px solid black;
}
.text1{
  font-family: "Quicksand" ;
  font-size: 8pt;
  color: #222323;
}
.text2{
  font-family: "Quicksand" ;
  font-size: 9pt;
  color: #222323;
}

.text3{
  font-family: "Quicksand" ;
  font-size: 8pt;
  float:left;
  color: #909090;
  padding-bottom:6px;
}
.text4{
  font-family: "Quicksand" ;
  font-size: 0.6vw;
  color: #222323;
  padding-top:0.4vh;
  padding-left: 0.4vw;
}
.text5{
  font-family: "Quicksand" ;
  font-size: 0.6vw;
  color: #86c6d6;
  padding-top:0.4vh;
  padding-right: 0.4vw;
}
.text6{
  font-family: "Quicksand" ;
  font-size: 14pt;
  color: #25459a;


}
.text7{
  font-family: "Quicksand" ;
  font-size: 14pt;
  color: #909090;

}
.button1 {
    height: 6vh;/*59px*/
  width : 17vw;/*349px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 1vw;
  margin-top: 6px;/*6px*/
  border-radius: 1px;

}
.button2 {
  height: 6vh;/*59px*/
  width : 14.5vw;/*349px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 1vw;
  margin-top: 6px;/*6px*/
  border-radius: 1px;
  margin-left:0.5vw;/*15px*/
  float:left;

}
.button3 {
  height: 3vh;/*59px*/
  width : 8.5vw;/*349px*/
  background-color: #25459a;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.7vw;
  border-radius: 1px;

}
.button4{
  width:6vw;
  height:3vh;
  font-size: 1vw;
  color:#909090;
}
.button5 {
  height: 3vh;/*59px*/
  width : 6vw;/*349px*/
  background-color: #dfe7fb;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.7vw;
}
.button6{
  background-color: #25459a;
  color: #ffffff;
  height: 3vh;/*59px*/
  width : 6vw;/*349px*/
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.7vw;

}
.box{
  width:26vw;
  height:3vh;
  border:0.5px solid #2a2a2a;
  margin-left: 2vw;
}
.image{
  margin-top:26px;
  width: 60vw;
  position: absolute;
  z-index: 1;
}
.image2{
margin-top:-1px;

  position: relative;
  z-index: 3;
}
</style>