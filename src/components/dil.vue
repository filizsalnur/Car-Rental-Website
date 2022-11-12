<template>
    <div class="space5" >
<div><button class="button2" >Bölgesel Ayarlar</button></div>

  <div class="text2">Bulunduğunuz bölgeye uygun <b>Dil </b>ve <b>Para Birimi </b>seçimi yapabilirsiniz.</div>  

  <div class="space2">
				<div class="text1"><font-awesome-icon icon="fa-solid fa-earth-americas" /> Dil Seçimi</div>
    <select v-model="dil" class="button7">
    <option disabled value="">Türkçe(Turkey)</option>
    <option>İngilizce</option>
    <option>Almanca</option>
</select>
<div class="text1"><font-awesome-icon icon="fa-solid fa-coins" /> Para Birimi</div>
    <select v-model="para" class="button7">
    <option disabled value="">TRY </option>
    <option>İngilizce</option>
    <option>Almanca</option>
</select>

					<div><button class="button3"><b> Kaydet</b></button></div>
		
			</div>
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
    height:220px;
    background-color: #ffffff;
    align-self: center;
    margin:0 auto;
    border-radius: 8px;
    margin-top: 3vh;
  }

  .text1{
    font-family: "Quicksand" ;
    font-size: 12pt;
    color: #2a2a2a;
    margin-bottom: 1vh;
    padding-bottom: 0;
    margin-top:1vh;
    float:left;
    margin-left:15px;
  }
  .text2{
    font-family: "Quicksand" ;
    font-size:10pt;
    color: #ffffff;
    margin-top: 3vh;
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
    font-size: 12pt;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    z-index: 9;
    margin-top: 20px;
    text-align: center;
  }
  .button7 {
    height: 30px;
    width : 230px;
    background-color: #ffffff;
    color: #2a2a2a;
    border: 1px solid #98a7cf;
    font-family: "Quicksand" ;
    font-size: 10pt;
    cursor: pointer;
    border-radius: 1px;
    position: relative;
    z-index: 9;
    text-align: left;
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
    margin-top:2vh;

  }


  </style>