<template>

<div class="center" style="margin-top:26px">

  <div class="space" >
    <div class="space2" >
      <div class="space" style="margin-top:10px;padding-bottom:10px;border-bottom:1px solid black;">
            <div class="text1" ><a href="#">Filtre Uygula</a></div>
            <div class="text1" style="margin-right:1vw"> Filtreyi Temizle</div>
      </div>
      <!--Fiyat Aralığı-->
      <div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Fiyat Aralığı</b></div>
      <div class="space" style="margin-top:10px;padding-bottom:10px;border-bottom:1px solid black;">
            <div class="text1"><input type="text" id="min" placeholder="En Az" class="button4"></div>
            <div class="text1"><input type="text" id="max" placeholder="En Çok" class="button4"></div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="min-max" id="min-max"  checked style="margin-right:1vw">
            </div>
    </div>
 <!--Vites Tipi-->
 <div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Vites Tipi</b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="vites" id="otomatik" value="otomatik" checked style="float:left">
        <label class="text3" for="otomatik">
          Otomatik
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="vites" id="manuel" value="manuel" checked style="float:left">
        <label class="text3" for="manuel">
          Manuel
        </label>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="vites" id="triptonik" value="triptonik" checked style="float:left">
        <label class="text3" for="triptonik">
          Triptonik
        </label>
        </div>
        <div class="col-6">
        <input class="form-check-input" type="radio" name="vites" id="all" value="all" checked style="float:left">
        <label class="text3" for="all">
          Tümü
        </label>
        </div>
      </div>
</div>
 <!--Yakıt Tipi-->
 <div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Yakıt Tipi</b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="benzin" value="benzin" checked style="float:left">
        <label class="text3" for="benzin">
          Benzin
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="dizel" value="dizel" checked style="float:left">
        <label class="text3" for="dizel">
          Dizel
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="hibrit" value="hibrit" checked style="float:left">
        <label class="text3" for="hibrit">
          Hibrit
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="lpg" value="lpg" checked style="float:left">
        <label class="text3" for="lpg">
          LPG
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="elektrik" value="elektrik" checked style="float:left">
        <label class="text3" for="elektrik">
          Elektrik
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="benzinLpg" value="benzinLpg" checked style="float:left">
        <label class="text3" for="benzinLpg">
          Benzin-LPG
        </label>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="all1" value="all" checked style="float:left">
        <label class="text3" for="all1">
          Tümü
        </label>
        </div>
        <div class="col-6">
        </div>
      </div>
</div>
 <!--Araç Sınıfı-->
 <div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Araç Sınıfı</b></div>
      <div class="container" style="margin-top:10px;">
        <div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="sinif" id="comfort" value="comfort" checked style="float:left">
        <label class="text3" for="comfort">
          Comfort
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="sinif" id="ekonomi" value="ekonomi" checked style="float:left">
        <label class="text3" for="ekonomi">
          Ekonomi(44)
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="sinif" id="suv" value="suv" checked style="float:left">
        <label class="text3" for="suv">
          SUV(77)
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="premium" id="premium" value="premium" checked style="float:left">
        <label class="text3" for="premium">
          Premium(9)
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="sinif" id="combi" value="combi" checked style="float:left">
        <label class="text3" for="combi">
          Combi
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="sinif" id="minivan" value="minivan" checked style="float:left">
        <label class="text3" for="minivan">
          Minivan
        </label>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="sinif" id="all2" value="all" checked style="float:left">
        <label class="text3" for="all2">
          Tümü
        </label>
        </div>
        <div class="col-6">
        </div>
      </div>
</div>
<!--Markalar-->
<div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Markalar</b></div>
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
<!--KM Sınırı-->
<div class="text2" style="margin-right:1vw;margin-top:10px;"><b>KM Sınırı</b></div>
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
 <!--Deposito Bedeli-->
 <div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Deposito Bedeli</b></div>
      <div class="space" style="margin-top:10px;padding-bottom:10px;border-bottom:1px solid black;">
            <div class="text1"><input type="text" id="min" placeholder="En Az" class="button4"></div>
            <div class="text1"><input type="text" id="max" placeholder="En Çok" class="button4"></div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="deposito" id="min-max"  checked style="margin-right:1vw">
            </div>
    </div>
<!--Kredi Kartı-->
<div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Kredi Kartı Zorunluluğu</b></div>
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
<!--Kiralama Firmaları-->
<div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Kiralama Firmaları</b></div>
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
      <!--Teslimat Noktası-->
<div class="text2" style="margin-right:1vw;margin-top:10px;"><b>Teslimat Noktası</b></div>
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
    <div class="space3" >


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
height: 100%;
z-index: 1;
border-right: 1px solid black;
}
.space3 {
position: relative;
width:43vw;
height: 150vh;
z-index: 1;
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
height: 6vh;/*59px*/
  width : 9vw;/*349px*/
  float:right;
  background-color: #25459a;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 1vw;
  margin-top: 6px;/*6px*/
  margin-left:0.5vw;/*15px*/
  border-radius: 1px;

}
.button4{
  width:6vw;
  height:3vh;
  font-size: 1vw;
  color:#909090;
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