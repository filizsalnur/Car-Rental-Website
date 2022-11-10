<template>
<div class="navbar">
    <div class="center">
        <div>
          <img alt="Logo" src="@/images/mobil/header/logo.png"  >
        </div>    
        <div> 
          <font-awesome-icon icon="fa-solid fa-headset" class="icon" style="color:#25459a"/>
            <div style="float:right">
              <div class="text1">7/24 Müşteri Destek</div>
              <div class="text2">0850 888 1 864</div>
            </div>
          </div> 
          <div> 
            <img  src="@/images/mobil/header/menuBar.png" alt="icon" @click="menuController=!menuController">
          </div> 
      </div>    
</div>
<div v-if="menuController==true" class="space1">
  <div class="center2">
    <div class="space2">
      <div><b>Menu</b></div>
      <div>Kapat <img  src="@/images/mobil/header/close.png" alt="icon" @click="menuController=false"></div>
    </div>
    <div class="text3" @click="login()"><img  src="@/images/mobil/header/profil.png" alt="icon" style="margin-right:3vw;" >Giriş Yap | Üye Ol</div>
    <div class="text3"><img  src="@/images/mobil/header/rezervasyon.png" alt="icon" style="margin-right:3vw;">Rezervasyon Sorgula</div>
    <div class="text3"><img  src="@/images/mobil/header/para.png" alt="icon" style="margin-right:3vw;">Türkçe / TRY<img  src="@/images/mobil/header/turkey.png" alt="icon" style="margin-left:2vw"></div>
    <div ><img  src="@/images/mobil/header/line.png" alt="icon"></div>
    <div class="text3" style="margin-top:2vh"><img  src="@/images/mobil/header/ara.png" alt="icon" style="margin-right:3vw;">Bize Ulaşın</div>
    <div ><img  src="@/images/mobil/header/line.png" alt="icon"></div>
    <div class="text3" style="margin-top:2vh"><img  src="@/images/mobil/header/indir.png" alt="icon" style="margin-right:3vw;">Uygulamamızı İndirin</div>
  </div>
</div>
<div v-if="logController==true">

      <div style="background-color:#25459a;"><img  src="@/images/mobil/header/close.png" alt="icon" @click="logController=false" style="float:right"></div>

<mobileLogin/></div>
</template>
  
  <script>
  import mobileLogin from './login.vue'
  export default ({
    name:'HeaderApp',
    components: {
        mobileLogin,
    },
    data() {
      return {
        menuController:false,
        logController:false,
      }
    },
    methods: {
      login(){
        this.logController=true;
        this.menuController=false;
      }
    }
  })
  </script>
  
  <style scoped>
  .navbar{
  height: 80px;
  background: #ffffff;
  width:100vw;
}

.center{
  margin: auto;
  width: 90%;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.center2{
  width: 80%;
  margin:0 auto;
}
.space1{
  height: 150vh;
  width:100vw;
  background-color: #1f1f67;
  color:#ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 4vw;

}
.space2{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-top:2vh;
  padding-bottom:5vh;
  margin-bottom:5vh;
}
.logo{
  position: relative;

  height: 3vh;
  left: 0px;

}
.icon{
  position: relative;
  height: 23px;
margin-top:1vh;
  margin-right: 4px;
}
.text1{
  font-family: "Quicksand" ;
  font-size: 7pt;
  color: #25459a;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 13pt;
  margin-top:0.5vh;
}
.text2{
  font-family: "Poppins" ;
  font-size: 9pt;
  color: #373737;
  margin-top: 0;
  padding-top: 0;
  line-height: 8pt;
}
.text3{
  font-family: "Quicksand" ;
  font-size: 4vw;
  color: #ffffff;
  margin-right:3vw;
  padding-bottom: 3vh;
  float:left;

  
}
  </style>