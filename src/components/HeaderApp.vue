<template>

  <div class="navbar1">
    <div class="center">
        <div>
        <img alt="Logo" src="@/images/Header/Logo.png"  class="logo">
  
      </div>
      <div>
      <button class="button1" v-if="clickController==false" @click="logController=!logController">Giriş Yap | Üye Ol</button>
        <button class="button1" v-if="clickController==true" @click="clickController=!clickController"><img alt="Turkey" src="@/images/Header/LogIcon.png" style="margin-top:0px"> Enver Yıldırım
        </button>
        <button class="button2">Rezervasyon Sorgula</button>
        <button class="button3">Türkçe <img alt="Turkey" src="@/images/Header/Turkey.png"> TRY <img alt="icon" src="@/images/Header/IconOk.png"></button>
      </div>
          <div>
        
         
  <img  src="@/images/Header/Icon.png" alt="icon" class="icon">
            <div style="float:right">
              <div class="text1">7/24 Müşteri Destek</div>
              <div class="text2">0850 888 1 864</div>
            </div>
          </div>
          
          </div>
  
        
  </div>
  
  <div v-if="logController==true"><deskopLogin/></div>

</template>

<script>
import deskopLogin from './login.vue';
export default ({
  name:'HeaderApp',
  components: {
        deskopLogin,
    },
  data() {
    return {
      logController:false,
      clickController:false,
    }
  },
  methods: {
    
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
  width: 169px;
  height: 23px;
  left: 0px;

}
.icon{
  position: relative;
  width: 36px;
  height: 36px;
  margin-right: 10px;
}
.text1{
  font-family: "Quicksand" ;
  font-size: 10pt;
  color: #25459a;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 16pt;
}
.text2{
  font-family: "Poppins" ;
  font-size: 12pt;
  color: #373737;
  margin-top: 0;
  padding-top: 0;
  line-height: 9pt;
}
.button1 {
  height: 4vh;
  width : 8vw;
  background-color: #25459a;
  color: #ffffff;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-right: 8px;
  border-radius: 8px;
}
.button2 {
  height: 4vh;
  width : 12vw;
  background-color: #ffffff;
  color: #25459a;
  border: 1px solid #98a7cf;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-right: 4px;
  cursor: pointer;
  border-radius: 8px;
}
.button3 {
  height: 4vh;
  width : 9vw;
  background-color: #ffffff;
  color: #2a2a2a;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-right: 10px;
  border-radius: 8px;
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

</style>