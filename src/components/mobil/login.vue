<template>

<div class="space" v-if="logController==false">
  <div  style="margin-top:50px;"><button class="button1">Giriş Yap</button><button class="button2" @click="logController=true">Üye Ol </button></div>
 <div class="text1">Hoşgeldiniz</div>  
 <div class="text2">Giriş Yapın</div>  
 <div class="space2">
         <form id="login">
           <input class="box" type="email" name="email" v-model="email" placeholder="E-Posta" required="" style="width:70vw;margin-top:2.5vh">
           
           <input class="box" type="password" v-model="parola" name="pswd" placeholder="Parola" required="" style="width:70vw;margin-top:0.5vh;margin-bottom:2vh">
                     <div style="float:left;margin-left:2.5vw;margin-bottom:3vh">
                      <div v-if="rememberMe==false" @click="remember()" class="text3"><font-awesome-icon icon="fa-solid fa-square" /> Beni Hatırla</div>
        <div v-if="rememberMe==true" @click="remember()" class="text3"><font-awesome-icon icon="fa-solid fa-square-check" /> Beni Hatırla</div>
         </div>
           <div><button class="button3"><b>Giriş Yap</b></button></div>
         </form>
       </div>
       <div class="text3"><img alt="Logo" src="@/images/login/kilit.png"> Parolamı Unuttum</div>
 </div>
 
 
   <div class="space" v-if="logController==true">
  <div style="margin-top:50px"><button class="button5" @click="logController=false">Giriş Yap</button><button class="button4">Üye Ol</button></div>
  <div class="space3">
         <form id="register">
           <input class="box" type="text" name="name" placeholder="Ad/Soyad" required="" style="width:70vw;margin-top:2.5vh">
           <input class="box" type="email" name="email" placeholder="E-posta" required="" style="width:70vw;margin-top:0.5vh">
           <input class="box" type="password" name="pswd" placeholder="Parola" required="" style="width:70vw;margin-top:0.5vh">
            <input class="box" type="password" name="pswd1" placeholder="Parola(Tekrar)" required="" style="width:70vw;margin-top:0.5vh;margin-bottom:2vh">
            <div style="float:left;margin-left:1vw">
   
             <div v-if="checkerForm==false" @click="check()" class="text3"><font-awesome-icon icon="fa-solid fa-square" /><a href="#" class="a"> Gizlilik Politikası</a>, <a href="#"  class="a"> Açık Rıza Beyanı </a> ve 
             <a href="#"  class="a"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
        <div v-if="checkerForm==true" @click="check()" class="text3"><font-awesome-icon icon="fa-solid fa-square-check" /> <a href="#"  class="a"> Gizlilik Politikası</a>, <a href="#"  class="a"> Açık Rıza Beyanı </a> ve 
             <a href="#"  class="a"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
       
 
         </div>
           <div><button class="button3" style="margin-top:8vh"><b>Üye Ol</b></button></div>
         </form>
       </div>
 </div>
 
   </template>
  <script>
  export default ({
    name:'HeaderApp',
    data() {
      return {
        logController:false,
        checkerForm:false,
        rememberMe:false,
      }
    },
    methods: {
       check() {
         this.checkerForm=!this.checkerForm;
       },
       remember() {
         this.rememberMe=!this.rememberMe;
       },
   
     },
  })
  </script>
  
  <style scoped>
  .space{
    position:absolute;
    z-index:5;
    width:100vw;
    height:150vh;
    background-color: #25459a;
    position: fixed;
    margin-top: 80px;
  }
  .space2{
    position:relative;
    z-index:5;
    width:80vw;
    height:30vh;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 3vh;
  }
  .space3{
    position:relative;
    z-index:5;
    width:80vw;
    height:45vh;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 7vh;

  }
  .checkLine{

text-align: center;
display:flex;
justify-content: space-between;
align-items: center;

}
  .nav-right{
    padding-top: 12px;
    display: block;
    
  }
  .center{
    margin:0 auto;
    width: 90%;
    display:flex;
      justify-content: space-between;
      align-items: center;
  }
  .a{
  color:#98a7cf;
  text-decoration: underline;
}
  .text1{
    font-family: "Quicksand" ;
    font-size: 6vw;
    color: #ffffff;
    margin-bottom: 4vh;
    padding-bottom: 0;
    margin-top:2vh;
  }
  .text2{
    font-family: "Poppins" ;
    font-size: 12pt;
    color: #ffffff;
    margin-top: 0;
    padding-top: 0;
    line-height: 9pt;
  }
  .text3{
    font-family: "Poppins" ;
    font-size: 3vw;
    color:#98a7cf;
    margin-top: 1vh;
    padding-top: 0;
    line-height: 9pt;
    margin-left:2.5vw;
  }
  .button1 {
    height: 6vh;
    width : 40vw;
    background-color: #fcb101;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 5vw;
    border-radius: 20px;
    position: absolute;
    z-index: 5;

  }
  .button2 {
    height: 6vh;
    width : 70vw;
    background-color: #ffffff;
    color: #2a2a2a;
    border: 1px solid #98a7cf;
    font-family: "Quicksand" ;
    font-size: 5vw;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    z-index: 4;
    text-align: right;
    padding-right: 8vw;
  }
  .button4 {
    height: 6vh;
    width : 40vw;
    background-color: #fcb101;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 5vw;
    border-radius: 20px;
    position: absolute;
    z-index: 5;
    margin-left: -40vw;

  }
  .button5 {
    height: 6vh;
    width : 70vw;
    background-color: #ffffff;
    color: #2a2a2a;
    border: 1px solid #98a7cf;
    font-family: "Quicksand" ;
    font-size: 5vw;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    z-index: 4;
    text-align: left;
    padding-left: 8vw;

  }
  .button3 {
    height: 6vh;
    width : 70vw;
    background-color: #fcb101;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 4vw;
    border-radius: 8px;
    margin-top:1vh;
  }
  
  .card{
  
    width: 400px;
    border:none;
  
  }
  .box{
  border:none;
  border-bottom: 0.5px solid #d8d8d8;
}

  
  </style>