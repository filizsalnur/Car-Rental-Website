<template>

    <div class="space" v-if="logController==false">

 <div style="margin-top:2vh"><button class="button1">Giriş Yap</button><button class="button2" @click="logController=true">Üye Ol</button></div>
<div class="text1">Hoşgeldiniz</div>  
<div class="text2">Giriş Yapın</div>  
<div class="space2">
				<form>
					<input type="email" name="email" placeholder="E-Posta" required="" style="width:70vw;margin-top:2.5vh">
					<input type="password" name="pswd" placeholder="Parola" required="" style="width:70vw;margin-top:0.5vh;margin-bottom:2vh">
                    <div style="float:left;margin-left:1vw">
          <input type="checkbox" id="checkbox" v-model="checked" @click="checker=!checker" />
          <label for="checkbox" style="margin-left:0.3vw">Beni Hatırla</label>
        </div>
					<div><button class="button3"><b>Giriş Yap</b></button></div>
				</form>
			</div>
</div>


  <div class="space" v-if="logController==true">
 <div style="margin-top:2vh"><button class="button2" @click="logController=false">Giriş Yap</button><button class="button1">Üye Ol</button></div>
 <div class="space3">
				<form>
                    <input type="text" name="name" placeholder="Ad/Soyad" required="" style="width:70vw;margin-top:2.5vh">
					<input type="email" name="email" placeholder="E-posta" required="" style="width:70vw;margin-top:0.5vh">
					<input type="password" name="pswd" placeholder="Parola" required="" style="width:70vw;margin-top:0.5vh">
                    <input type="password" name="pswd1" placeholder="Parola(Tekrar)" required="" style="width:70vw;margin-top:0.5vh;margin-bottom:2vh">
                    <div style="float:left;margin-left:1vw">
                        <div class="checkLine">
          <div style="padding-top:0;top:0"><input type="checkbox" id="checkbox" v-model="checked" @click="checker=!checker" /></div>
          <div style="font-size:3.5vw"><a href="#">Gizlilik Politikası</a>, <a href="#"> Açık Rıza Beyanı </a> ve 
            <a href="#"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
        
        </div>

        </div>
					<div><button class="button3"><b>Giriş Yap</b></button></div>
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
      }
    },
    methods: {
      
    }
  })
  </script>
  
  <style scoped>
  .space{
    position:absolute;
    z-index:5;
    width:100vw;
    height:150vh;
    background-color: #25459a;


  }
  .space2{
    position:relative;
    z-index:5;
    width:80vw;
    height:40vh;
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
    height:60vh;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 3vh;

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
  .button1 {
    height: 6vh;
    width : 30vw;
    background-color: #fcb101;
    color: #2a2a2a;
    border: none;
    font-family: "Quicksand" ;
    font-size: 4vw;
    border-radius: 8px;
  }
  .button2 {
    height: 6vh;
    width : 30vw;
    background-color: #ffffff;
    color: #2a2a2a;
    border: 1px solid #98a7cf;
    font-family: "Quicksand" ;
    font-size: 4vw;
    cursor: pointer;
    border-radius: 8px;
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
  
  
  
  </style>