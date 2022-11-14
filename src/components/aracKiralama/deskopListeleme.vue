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
       
              
              <div v-if="fiyatForm==false" @click="fiyatForm=true"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text6" style="padding-right: 1vw;"/></div>
        <div v-if="fiyatForm==true" @click="fiyatForm=false"><font-awesome-icon icon="fa-solid fa-circle-dot" class="text7" style="padding-right: 1vw;"/></div>
           
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
        <input class="form-check-input" type="radio" name="markalar" id="seat" value="seat" checked style="float:left">
        <label class="text3" for="seat">
          Seat(3)
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="opel" value="opel" checked style="float:left">
        <label class="text3" for="opel">
          Opel(24)
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="volvo" value="volvo" checked style="float:left">
        <label class="text3" for="volvo">
          Volvo
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="volkswagen" value="volkswagen" checked style="float:left">
        <label class="text3" for="volkswagen">
          Volkswagen(13)
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="toyota" value="toyota" checked style="float:left">
        <label class="text3" for="toyota">
          Toyota(33)
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="skoda" value="skoda" checked style="float:left">
        <label class="text3" for="skoda">
          Skoda
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="peugeot" value="peugeot" checked style="float:left">
        <label class="text3" for="peugeot">
          Peugeot(14)
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="mazda" value="mazda" checked style="float:left">
        <label class="text3" for="mazda">
          Mazda(14)
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="renault" value="renault" checked style="float:left">
        <label class="text3" for="renault">
          Renault
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="nissan" value="nissan" checked style="float:left">
        <label class="text3" for="nissan">
          Nissan(10)
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="bmw" value="bmw" checked style="float:left">
        <label class="text3" for="bmw">
          BMW
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="audi" value="audi" checked style="float:left">
        <label class="text3" for="audi">
          Audi
        </label>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="all3" value="all" checked style="float:left">
        <label class="text3" for="all3">
          Tümü
        </label>
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
        <input class="form-check-input" type="radio" name="km" id="km1" value="km1" checked style="float:left">
        <label class="text3" for="km1">
          1500-2000
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="km" id="km2" value="km2" checked style="float:left">
        <label class="text3" for="km2">
          1500-2000
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="km" id="km3" value="km3" checked style="float:left">
        <label class="text3" for="km3">
          1500-2000
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="km" id="km4" value="km4" checked style="float:left">
        <label class="text3" for="km4">
          1500-2000
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="km" id="km5" value="km5" checked style="float:left">
        <label class="text3" for="km4">
          1500-2000
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="km" id="km6" value="km6" checked style="float:left">
        <label class="text3" for="km5">
          1500-2000
        </label>
        </div>
</div>

      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="km" id="all4" value="all" checked style="float:left">
        <label class="text3" for="all4">
          Tümü
        </label>
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
            <div class="form-check">
              <input class="form-check-input" type="radio" name="deposito" id="min-max"  checked style="margin-right:1vw">
            </div>
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
        <input class="form-check-input" type="radio" name="kart" id="evet" value="evet" checked style="float:left">
        <label class="text3" for="evet">
          Evet
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="kart" id="hayır" value="hayır" checked style="float:left">
        <label class="text3" for="hayır">
          Hayır
        </label>
        </div>


      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="kart" id="all5" value="all" checked style="float:left">
        <label class="text3" for="all5">
          Tümü
        </label>
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
        <input class="form-check-input" type="radio" name="firma" id="firma1" value="1" checked style="float:left">
        <label class="text3" for="firma1">
          Çizgi
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma2" value="2" checked style="float:left">
        <label class="text3" for="manuel">
          Nissa
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma3" value="3" checked style="float:left">
        <label class="text3" for="otomatik">
          Central
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma4" value="4" checked style="float:left">
        <label class="text3" for="manuel">
          Asist(24)
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma5" value="5" checked style="float:left">
        <label class="text3" for="otomatik">
          Rentgo(7)
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma6" value="6" checked style="float:left">
        <label class="text3" for="manuel">
          Novacar
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma7" value="7" checked style="float:left">
        <label class="text3" for="otomatik">
         Kar Rent(12)
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma8" value="8" checked style="float:left">
        <label class="text3" for="manuel">
          7/24 Rent
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma9" value="9" checked style="float:left">
        <label class="text3" for="otomatik">
          Green Motion
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma10" value="10" checked style="float:left">
        <label class="text3" for="manuel">
          DMR Car
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma11" value="11" checked style="float:left">
        <label class="text3" for="otomatik">
          Circular
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="firma" id="firma12" value="12" checked style="float:left">
        <label class="text3" for="manuel">
          Caraj(9)
        </label>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="markalar" id="all6" value="all" checked style="float:left">
        <label class="text3" for="all6">
          Tümü
        </label>
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
        <input class="form-check-input" type="radio" name="teslimat" id="acenta" value="acenta" checked style="float:left">
        <label class="text3" for="acenta">
          Acenta Ofisi
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="teslimat" id="vale" value="vale" checked style="float:left">
        <label class="text3" for="vale">
          Vale Hizmeti
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="teslimat" id="ic" value="ic" checked style="float:left">
        <label class="text3" for="ic">
          Terminal İçi
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="teslimat" id="dis" value="dis" checked style="float:left">
        <label class="text3" for="dis">
          Terminal Dışı
        </label>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="teslimat" id="all7" value="all" checked style="float:left">
        <label class="text3" for="all7">
          Tümü
        </label>
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