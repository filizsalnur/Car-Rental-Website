<template>

  <div class="navbar1">
    <div class="center">
        <div>
          <router-link to="/"><img alt="Logo" src="@/images/Header/Logo.png"  class="logo"></router-link>
  
      </div>
<div class="space"></div>

      <div style="float:right">
      <button class="button1" v-if="clickController==false" @click="logController=!logController  , rezervasyonController=false , dilController=false">Giriş Yap | Üye Ol</button>
        <button class="button1" v-if="clickController==true" @click="clickController=!clickController"><img alt="Turkey" src="@/images/Header/LogIcon.png" style="margin-top:0px"> Enver Yıldırım
        </button>
        <button class="button2" @click="rezervasyonController=!rezervasyonController, logController=false,dilController=false">Rezervasyon Sorgula</button>
        <button class="button3" @click="dilController=!dilController,rezervasyonController=false,logController=false">Türkçe <img alt="Turkey" src="@/images/Header/Turkey.png" style="width:1vw"> TRY <font-awesome-icon icon="fa-solid fa-chevron-down" style="width:1vw"/></button>
      </div>
          <div>
        
         
            <font-awesome-icon icon="fa-solid fa-headset fa-xl"  style="color:#25459a;" class="icon"/>
            <div style="float:right">
              <div class="text1">7/24 Müşteri Destek</div>
              <div class="text2">0850 888 1 864</div>
            </div>
          </div>
          
          </div>
  
        
  </div>
  <div class="blur-content" v-if="logController==true" @click="logController=false"></div>
  <div class="blur-content" v-if="rezervasyonController==true" @click="rezervasyonController=false"></div>
  <div class="blur-content" v-if="dilController==true" @click="dilController=false"></div>
  <div v-if="logController==true"><deskopLogin/></div>
  <div v-if="rezervasyonController==true"><deskopRezervasyon/></div>
  <div v-if="dilController==true"><deskopDil/></div>

</template>

<script>
import deskopLogin from './login.vue';
import deskopRezervasyon from './rezervasyon.vue';
import deskopDil from './dil.vue';

export default ({
  name:'HeaderApp',
  components: {
    deskopLogin,
        deskopRezervasyon,
        deskopDil,
    },
  data() {
    return {
      logController:false,
      clickController:false,
    }
  },
  methods: {
    logController:false,
      clickController:false,
      rezervasyonController:false,
      dilController:false,
  }
})
</script>

<style scoped>
.navbar1{
  height: 80px;
  background: #ffffff;
  width: 100%;
  display:flex;
}
.nav-right{
  padding-top: 12px;
  display: block;
  
}
.center{
  margin:0 auto;
  width: 60%;
  display:flex;
    justify-content: space-between;
    align-items: center;
}

.logo{
  position: relative;
  height: 20px;
  left: 0px;

}
.icon{
  position: relative;
  width: 23px;
  height: 23px;
  margin-right: 10px;
  margin-top: 0.5vh;
}
.text1{
  font-family: "Quicksand" ;
  font-size: 0.8vh;
  color: #25459a;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 14pt;
}
.text2{
  font-family: "Poppins" ;
  font-size: 1vh;
  color: #373737;
  margin-top: 0;
  padding-top: 0;
  line-height: 7pt;
}
.button1 {
  height: 25px;
  width : 8.5vw;
  background-color: #25459a;
  color: #ffffff;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-right: 8px;
  border-radius: 1px;
}
.button2 {
  height: 25px;
  width : 10vw;
  background-color: #ffffff;
  color: #25459a;
  border: 1px solid #98a7cf;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-right: 4px;
  cursor: pointer;
  border-radius: 1px;
}
.button3 {
  height: 25px;
  width : 9vw;
  background-color: #ffffff;
  color: #2a2a2a;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-right: 10px;
  border-radius: 1px;
}
.button1:hover {
  background-color: #ffffff;
  color: #2a2a2a;
}
.button2:hover {
  background-color: #25459a;
  color: #ffffff;
}
.button3:hover {
  background-color: #25459a;
  color: #ffffff;
}
.blur-content{
  background-color: #ffffff;
  opacity:0.8;
  position: absolute;
  z-index: 8;
  width:100%;
  height: 400%;
}
@media screen and (min-width:700px) and (max-width:844px){
  .space{
    display:none;
  }
  .icon{
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 2px;
  margin-top: 0.5vh;
}
.logo{
  position: relative;
  height: 15px;
  left: 0px;

}

  }
@media screen and (min-width:845px) and (max-width:962px){
  .space{
    width:0%;
  }
  .icon{
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 2px;
  margin-top: 0.5vh;
}
.button3 {
  margin-right: 1px;
}
  }
  @media screen and (min-width:963px) and (max-width:1070px){
  .space{
    width:5%;
  }
  }
  @media screen and (min-width:1071px){
  .space{
    width:10%;
  }
}
</style>