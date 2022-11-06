<template>
<div class="navbar">
    <div class="center">
        <div>
          <img alt="Logo" src="@/images/mobil/header/logo.png"  >
        </div>    
        <div> 
          <img  src="@/images/mobil/header/logo2.png" alt="icon" class="icon" >
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
      <div>Kapat<img  src="@/images/mobil/header/close.png" alt="icon" ></div>
    </div>
  </div>
</div>
</template>
  
  <script>
  export default ({
    name:'HeaderApp',
    data() {
      return {
        menuController:false,
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

}
.space1{
  height: 150vh;
  width:100vw;
  color: #1f1f67;
  border: none;
  font-family: "Quicksand" ;
  font-size: 8pt;

}
.space2{
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
  font-size: 8pt;
  color: #25459a;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 14pt;
}
.text2{
  font-family: "Poppins" ;
  font-size: 10pt;
  color: #373737;
  margin-top: 0;
  padding-top: 0;
  line-height: 9pt;
}

  </style>