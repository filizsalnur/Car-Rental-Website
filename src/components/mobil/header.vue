<template>
<div class="navbar" v-if="menuController==false && logController==false && rezervasyonController==false && dilController==false">
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
            <img  src="@/images/mobil/header/menuBar.png" alt="icon" @click="menu()">
          </div> 
      </div>    
</div>
<div v-if="menuController==true || logController==true || rezervasyonController==true || dilController==true" class="navbar2">
    <div class="center" style="margin-top:23px">
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
      <div @click="menuController=false">Kapat <font-awesome-icon icon="fa-solid fa-circle-xmark"/> </div>
    </div>
    <div class="text3" @click="login()"><img  src="@/images/mobil/header/profil.png" alt="icon" style="margin-right:3vw;" >Giriş Yap | Üye Ol</div>
    <div class="text3" @click="rezervasyon()"><img  src="@/images/mobil/header/rezervasyon.png" alt="icon" style="margin-right:3vw;">Rezervasyon Sorgula</div>
    <div class="text3" @click="dil()"><font-awesome-icon icon="fa-solid fa-coins" style="margin-right:3vw;"/> Türkçe / TRY<img  src="@/images/mobil/header/turkey.png" alt="icon" style="margin-left:2vw"></div>
    <div ><img  src="@/images/mobil/header/line.png" alt="icon"></div>
    <div class="text3" style="margin-top:2vh"><font-awesome-icon icon="fa-solid fa-headset" style="margin-right:3vw;"/>Bize Ulaşın</div>
    <div ><img  src="@/images/mobil/header/line.png" alt="icon"></div>
    <div class="text3" style="margin-top:2vh"><font-awesome-icon icon="fa-solid fa-circle-down" style="margin-right:3vw;"/>Uygulamamızı İndirin</div>
  </div>
</div>
<div v-if="logController==true" >

      <div  @click="logController=false"><div class="text4">Kapat <font-awesome-icon icon="fa-solid fa-circle-xmark"/> </div></div>

<mobileLogin/></div>
<div v-if="dilController==true" >

<div  @click="dilController=false" ><div class="text4">Kapat <font-awesome-icon icon="fa-solid fa-circle-xmark"/> </div></div>

<mobileDil/></div>
<div v-if="rezervasyonController==true" >

<div  @click="rezervasyonController=false" ><div class="text4">Kapat <font-awesome-icon icon="fa-solid fa-circle-xmark"/> </div></div>
<div><mobileRezervasyon/></div></div>


</template>
  
  <script>
  import mobileLogin from './login.vue'
  import mobileDil from './dil.vue'
  import mobileRezervasyon from './rezervasyon.vue'
  export default ({
    name:'HeaderApp',
    components: {
        mobileLogin,
        mobileRezervasyon,
        mobileDil,
    },
    data() {
      return {
        menuController:false,
        logController:false,
        dilController:false,
        rezervasyonController:false,
      }
    },
    methods: {
      login(){
        this.logController=true;
        this.menuController=false;
   
        this.dilController=false;
        this.rezervasyonController=false;
      },
      rezervasyon(){
        this.rezervasyonController=true;
        this.menuController=false;
        
        this.dilController=false;
        this.logController=false;
      },
      dil(){
        this.dilController=true;
        this.menuController=false;
        
        this.logController=false;
        this.rezervasyonController=false;
      },
      menu(){
        this.menuController=!this.menuController;
        this.logController=false;
        this.dilController=false;
        this.rezervasyonController=false;
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
.navbar2{
  height:80px;
  background: #ffffff;
  width:100vw;
  position: fixed;
  z-index: 10;
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
  width:100vw;
  height: 100vh;
  background-color: #1f1f67;
  color:#ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 4vw;
  position: fixed;
  z-index:7;
  margin-top:80px;
}
.space2{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-top:2vh;
  padding-bottom:5vh;
  margin-bottom:5vh;
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
.text4{
  font-family: "Quicksand" ;
  font-size: 4vw;
  color: #ffffff;
  margin-left:80vw;
  margin-top: 90px;
  float:right; 
  position: fixed;
  z-index: 9;
}
  </style>