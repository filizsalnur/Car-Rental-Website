<template>

<div class="space">
  <div class="center">
    
    <div class="space2" style="padding-top:24px">
      <div class="text1"><b>Araç Seçimi</b></div>
        <div class="text2"><b>Ekstra Seçenekler</b></div>
        <div class="text2"><b>Rezervasyon</b></div>
      </div>
      <div class="space2">
      <img src="@/images/aracKiralama/aracListeleme/cizgi.png" alt="icon"  class="image">
    </div>
    <div class="space2">
      <div>
        <img src="@/images/aracKiralama/aracListeleme/daire.png" alt="icon"  class="image2">
      </div>
      <div>
        <img src="@/images/aracKiralama/aracListeleme/daire.png" alt="icon"  class="image2">
      </div>
      <div>
        <img src="@/images/aracKiralama/aracListeleme/daire.png" alt="icon"  class="image2">
      </div>
    </div>
    <div class="space2">
      <div>
        <button class="button1"><img src="@/images/AnaSayfa/BlueIcon.png" alt="icon"> Sabiha Gökçen Havalimanı</button>
      </div>
      <div>
        <button class="button1"><img src="@/images/AnaSayfa/RedIcon.png" alt="icon"> Sabiha Gökçen Havalimanı</button>
      </div>
      <div>
        <button class="button2"><Datepicker v-model="date"  range :partialRange="false"   minutesIncrement="30" /></button>
      </div>
      <div>
        <button class="button3">Güncelle <img src="@/images/AnaSayfa/searchIcon.png" alt="icon" style="width:1vw;"></button>
      </div>
    </div>
  </div>
</div>

<div class="center">
  <div class="text2" style="float:left;padding-top:9px">Ana Sayfa / Araç Kiralama </div>
    <div class="space3"><img src="@/images/aracKiralama/Banner.png" alt="icon" style="  width: 60vw;"></div>
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
.space {
  height: 150px;/*200px*/
  width : 100%;/*1928px*/
  background-color: #d8dde8;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  border-radius: 8px;
  position: relative;
}
.space2{
  display:flex;
    justify-content: space-between;
    align-items: center;
}
.space3 {
position: relative;
top: 9px;/*45px*/
z-index: 1;

}
.text1{
  font-family: "Quicksand" ;
  font-size: 12pt;
  color: #222323;
}
.text2{
  font-family: "Quicksand" ;
  font-size: 12pt;
  color: #9e9fa1;
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