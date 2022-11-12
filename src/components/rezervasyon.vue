<template>

    <div class="space5" >
<div><button class="button2" >Rezervasyon Sorgula</button></div>

  <div class="text2">Rezervasyon sorgulamak için lütfen <b>Rezervasyon Numarası </b>ve <b>E-Posta </b>adresinizi girerek sorgulama yapın.</div>  

  <div class="space2">
				<form id="login">
					<input class="box" type="email" name="email" v-model="email" placeholder="E-Posta" required="" style="width:13vw;margin-top:2.5vh">
          
					<input class="box" type="text" v-model="parola" name="kod" placeholder="Rezervasyon Kodu" required="" style="width:13vw;margin-top:0.5vh;margin-bottom:2vh">
        
					<div><button class="button3"><b> <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Sorgulama Yap</b></button></div>
				</form>
			</div>
      <div class="text2">Rezervasyon numarasınızı size SMS ve e-posta yoluyla gönderilen "rezervasyon formu"nda bulabilirsiniz.</div>  
</div>

  </template>
  
  <script>

  export default ({
    name:'HeaderApp',
    data() {
      return {
        
      }
    },
   
    methods: {
    }
  })
  </script>
  
  <style scoped>
  .space5{
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
    height:200px;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 1vh;
  }
  .space3{
    position:relative;
    z-index:9;
    width:14vw;
    height:30vh;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 3vh;

  }
  .space4{
    width: 60%;
    text-align: center;
    display:flex;
    justify-content: space-between;

  }
.box{
  border:none;
  border-bottom: 0.5px solid #d8d8d8;
}
  .checkLine{

text-align: center;
display:flex;
justify-content: space-between;


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
    font-size: 14pt;
    color: #ffffff;
    margin-bottom: 1vh;
    padding-bottom: 0;
    margin-top:2vh;
  }
  .text2{
    font-family: "Quicksand" ;
    font-size: 9pt;
    color: #ffffff;
    margin-top: 1vh;
    padding-top: 0;
    margin-left: 15px;
    margin-right: 15px;
  }
  
  .button2 {
    height: 40px;
    width : 250px;
    background-color: #ffffff;
    color: #2a2a2a;
    border: 1px solid #98a7cf;
    font-family: "Quicksand" ;
    font-size: 10pt;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    z-index: 9;
    margin-top: 3vh;
    text-align: center;
  }
  
  .button3 {
    height: 40px;
    width : 250px;
    background-color: #fcb101;
    color: #ffffff;
    border: none;
    font-family: "Quicksand" ;
    font-size: 12pt;
    border-radius: 8px;
    margin-top:4vh;

  }
  

  </style>