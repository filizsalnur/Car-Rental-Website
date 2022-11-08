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
        <label class="text3" for="otomatik">
          Benzin
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="dize" value="dizel" checked style="float:left">
        <label class="text3" for="manuel">
          Dizel
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="hibrit" value="hibrit" checked style="float:left">
        <label class="text3" for="otomatik">
          Hibrit
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="lpg" value="lpg" checked style="float:left">
        <label class="text3" for="manuel">
          LPG
        </label>
        </div>
</div>
<div class="row" style="margin-top:5px">
          <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="elektrik" value="elektrik" checked style="float:left">
        <label class="text3" for="otomatik">
          Elektrik
        </label>
        </div>
      
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="benzinLpg" value="benzinLpg" checked style="float:left">
        <label class="text3" for="manuel">
          Benzin-LPG
        </label>
        </div>
</div>
      <div class="row" style="margin-top:5px;padding-bottom:10px;border-bottom:1px solid black;">
        <div class="col-6">
        <input class="form-check-input" type="radio" name="yakit" id="all" value="all" checked style="float:left">
        <label class="text3" for="triptonik">
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
height: 50vh;
z-index: 1;
border-right: 1px solid black;
}
.space3 {
position: relative;
width:43vw;
height: 50vh;
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
  font-size: 9pt;
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