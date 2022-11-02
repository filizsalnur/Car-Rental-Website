<template>
  <div class="navbar">
    <div class="center">
    
      <img alt="Logo" src="@/images/Header/Logo.png" class="logo">

        <div style="float:right">
        <div style="overflow:hidden">
        <div class="nav-right">
        <button class="button1" v-if="logController==false">Giriş Yap | Üye Ol</button>
        <button class="button1" v-if="logController==true" @click="clickController=!clickController"><img alt="Turkey" src="@/images/Header/LogIcon.png" style="margin-top:0px"> Enver Yıldırım
        </button>
        <button class="button2">Rezervasyon Sorgula</button>
        <button class="button3">Türkçe <img alt="Turkey" src="@/images/Header/Turkey.png"> TRY <img alt="icon" src="@/images/Header/IconOk.png"></button>
            <img  src="@/images/Header/Icon.png" alt="icon" class="icon">
          <div style="float:right">
            <div class="text1">7/24 Müşteri Destek</div>
            <div class="text2">0850 888 1 864</div>
          </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name:'HeaderApp',
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
.navbar{
  height: 80px;
  background: #ffffff;
}
.nav-right{
  padding-top: 12px;
  display: block;
  

}
.center{

  margin:0 auto;
  width: 1220px;
}
.logo{
  position: relative;
  width: 169px;
  height: 23px;
  left: 0px;
  float:left;
  margin-top: 16px;
}
.icon{
  position: relative;
  width: 36px;
  height: 36px;
  margin-right: 10px;
}


.text1{
  font-family: "Quicksand" ;
  font-size: 11pt;
  color: #25459a;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 17pt;
}
.text2{
  font-family: "Poppins" ;
  font-size: 13pt;
  color: #373737;
  margin-top: 0;
  padding-top: 0;
  line-height: 10pt;
}
.button1 {
  height: 37px;
  width : 153px;
  background-color: #25459a;
  color: #ffffff;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 11pt;
  margin-right: 8px;
  border-radius: 8px;
}
.button2 {
  height: 37px;
  width : 181px;
  background-color: #ffffff;
  color: #25459a;
  border: 1px solid #98a7cf;
  font-family: "Quicksand" ;
  font-size: 11pt;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 8px;
}
.button3 {
  height: 37px;
  width : 164px;
  background-color: #ffffff;
  color: #2a2a2a;
  border: 1px solid #25459a;
  font-family: "Quicksand" ;
  font-size: 11pt;
  margin-right: 30px;
  border-radius: 8px;
}
.button1:hover {
  border: 3px solid #98a7cf;
}
.button2:hover {
  border: 3px solid #98a7cf;
}
.button3:hover {
  border: 3px solid #25459a;
}
</style>