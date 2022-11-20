<template>

  <div class="navbar1" >
    <div class="center">
        <div>
          <router-link to="/"><img alt="Logo" src="@/images/Header/Logo.png"  class="logo"></router-link>
  
      </div>
      <div class="space"></div>

      <div >
      <button class="button1" v-if="clickController==false" @click="logController=!logController  , rezervasyonController=false , dilController=false">Giriş Yap | Üye Ol</button>
        <button class="button1" v-if="clickController==true" @click="clickController=!clickController"><img alt="Turkey" src="@/images/Header/LogIcon.png" style="margin-top:0px"> Enver Yıldırım
        </button>
        <button class="button2" @click="rezervasyonController=!rezervasyonController, logController=false,dilController=false">Rezervasyon Sorgula</button>
        <button class="button3" @click="dilController=!dilController,rezervasyonController=false,logController=false">Türkçe <img alt="Turkey" src="@/images/Header/Turkey.png" class="icon2"> TRY <font-awesome-icon icon="fa-solid fa-chevron-down" style="width:1vw"/></button>
      </div>
          <div>
        
         

            <font-awesome-icon icon="fa-solid fa-headset" class="icon" style="color:#25459a"/>

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
      rezervasyonController:false,
      dilController:false,
    }
  },

  methods: {
    
  }
})
</script>

<style scoped>
.navbar1{
  height: 4vw;
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
  width: 65%;
  display:flex;
    justify-content: space-between;
    align-items: center;
}

.logo{
  position: relative;
  width: 100%;
  height: 1.5vw;
  left: 0px;

}
.icon{
  position: relative;

  height: 2vw;
  margin-right: 10px;
  margin-top:0.5vh;
}
.icon2{
  position: relative;

  height: 1vw;

}
.text1{
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  color: #25459a;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0.3vh;
}
.text2{
  font-family: "Poppins" ;
  font-size: 0.8vw;
  color: #373737;
  margin-top: 0;
  padding-top: 0;
  line-height: 0.5vw;
}
.button1 {
  height: 2vw;
  width : 8vw;
  background-color: #25459a;
  color: #ffffff;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  border-radius: 5px;
  margin-right: 10px;
}
.button2 {
  height: 2vw;
  width : 10vw;
  background-color: #ffffff;
  color: #25459a;
  border: 1px solid #98a7cf;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
}
.button3 {
  height: 2vw;
  width : 9vw;
  background-color: #ffffff;
  color: #2a2a2a;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 0.8vw;

  border-radius: 5px;
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
  opacity:0.5;
  position: absolute;
  z-index: 8;
  width:100%;
  height: 500%;
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
@media screen and (min-width:701px) and (max-width:1284px){
  .space{
    width:5%;
  }
  }
  @media screen and (min-width:1285px) and (max-width:1504px){
  .space{
    width:10%;
  }
  }
  @media screen and (min-width:1505px){
  .space{
    width:15%;
  }
}
</style>