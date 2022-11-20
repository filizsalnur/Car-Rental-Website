<template>

    <div class="space" v-if="logController==false">
 <div  style="margin-top:2vh;"><button class="button1">Giriş Yap</button><button class="button2" @click="logController=true">Üye Ol </button></div>
<div class="text1">Hoşgeldiniz</div>  
<div class="text2">Giriş Yapın</div>  
<div class="space2">
				<form id="login">
					<input class="box" type="email" name="email" v-model="email" placeholder="E-Posta" required="" style="width:250px;margin-top:2.5vh">
          
					<input class="box" type="password" v-model="parola" name="pswd" placeholder="Parola" required="" style="width:250px;margin-top:0.5vh;margin-bottom:2vh">
          <div class="text6">
        <div v-if="checkerForm==false" @click="check()"><font-awesome-icon icon="fa-solid fa-square" /> Beni Hatırla</div>
        <div v-if="checkerForm==true" @click="check()"><font-awesome-icon icon="fa-solid fa-square-check" /> Beni Hatırla</div>

      </div>
					<div><button class="button3"><b>Giriş Yap</b></button></div>
				</form>
			</div>
      <div class="text3"><img alt="Logo" src="@/images/login/kilit.png"> Parolamı Unuttum</div>
</div>


  <div class="space" v-if="logController==true">
 <div style="margin-top:2vh"><button class="button5" @click="logController=false">Giriş Yap</button><button class="button4">Üye Ol</button></div>
 <div class="space3">
				<form id="register">
          <input class="box" type="text" name="name" placeholder="Ad/Soyad" required="" style="width:250px;margin-top:10px">
					<input class="box" type="email" name="email" placeholder="E-posta" required="" style="width:250px;margin-top:10px">
					<input class="box" type="password" name="pswd" placeholder="Parola" required="" style="width:250px;margin-top:10px">
                    <input class="box" type="password" name="pswd1" placeholder="Parola(Tekrar)" required="" style="width:250px;margin-top:15px;margin-bottom:2vh">
               
                     
                          <div class="text6">
        <div v-if="rememberForm==false" @click="remember()"><font-awesome-icon icon="fa-solid fa-square" /> <a href="#" class="a">Gizlilik Politikası</a>, <a href="#"  class="a"> Açık Rıza Beyanı </a> ve 
            <a href="#" class="a"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
        <div v-if="rememberForm==true" @click="remember()"><font-awesome-icon icon="fa-solid fa-square-check" /> <a href="#" class="a">Gizlilik Politikası</a>, <a href="#" class="a"> Açık Rıza Beyanı </a> ve 
            <a href="#" class="a"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
      </div>
					<div ><button class="button3"><b>Üye Ol</b></button></div>
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
        rememberForm:false,
      }
    },
    methods: {
    check() {
      this.checkerForm=!this.checkerForm;
    },
    remember() {
      this.rememberForm=!this.rememberForm;
    },

  },
  })
  </script>
  
  <style scoped>
  .space{
    position:absolute;
    z-index:9;
    width:300px;
    height:450px;
    background-color: #25459a;
    margin-left: 41vw;
    margin-top:10px;
  }
  .space2{
    position:relative;
    z-index:9;
    width:260px;
    height:210px;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 30px;
  }
  .space3{
    position:relative;
    z-index:9;
    width:260px;
    height:320px;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 3vh;

  }
.box{
  border:none;
  border-bottom: 0.5px solid #d8d8d8;
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
    display:flex;
      justify-content: space-between;
      align-items: center;
  }

  .icon{
    position: relative;
    width: 36px;
    height: 36px;
    margin-right: 10px;
  }
  .text1{
    font-family: "Quicksand" ;
    font-size: 18pt;
    color: #ffffff;
    margin-bottom: 1vh;
    padding-bottom: 0;
    margin-top:2vh;
  }
  .text2{
    font-family: "Poppins" ;
    font-size: 14pt;
    color: #ffffff;
    margin-top: 0;
    padding-top: 0;
    line-height: 9pt;
  }
  .text3{
    font-family: "Quicksand" ;
    font-size: 12px;
    color: #ffffff;
    padding-bottom: 0;
    margin-top:30px;
  }
  .text6{
  color: #585858;
  position: relative; 
  float: left;
  font-size: 8pt;
  margin-left: 10px;
  margin-right: 10px;
}
.a{
  color: #585858;
  text-decoration: underline;
}
  .button1 {
    height: 40px;
    width : 125px;
    background-color: #fcb101;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    border-radius: 20px;
    position: absolute;
    z-index: 10;

  }
  .button2 {
    height: 40px;
    width : 250px;
    background-color: #ffffff;
    color: #2a2a2a;
    border: 1px solid #585858;
    font-family: "Quicksand" ;
    font-size:  12pt;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    z-index: 9;
    text-align: right;
    padding-right: 45px;
  }
  .button4 {
    height: 40px;
    width : 125px;
    background-color: #fcb101;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    border-radius: 20px;
    position: absolute;
    z-index: 9;
    margin-left: -125px;

  }
  .button5 {
    height: 40px;
    width : 250px;
    background-color: #ffffff;
    color: #2a2a2a;
    border: 1px solid #98a7cf;
    font-family: "Quicksand" ;
    font-size: 12pt;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    z-index: 9;
    text-align: left;
    padding-left: 45px;

  }
  
  .button3 {
    height: 40px;
    width : 250px;
    background-color: #fcb101;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 14pt;
    border-radius: 8px;
    margin-top:20px;

  }
  

  </style>