<template>
  <footer class="footer">
   <div class="footer1">
    <div class="center">
      <div class="container">
        <div class="text1"><img src="@/images/Footer/logo.png" alt="..." style="margin-right:1rem">Şimdi Üye Olun!</div>
        <div class="text2">Şize özel kampanyalardan ve indirimlerden faydalanın. Rezervasyonlarınızı kolayca yönetin.</div>
        <div class="row g-1">
        <div class="col-10">
          <div class="row g-2">
          <div class="col">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Adınız">
          </div>
          <div class="col">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Soyadınız">
          </div>
          <div class="col">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-posta Adresiniz">
          </div>
          <div class="col">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Parolanız">
          </div>
        </div>
        </div>
        <div class="col-2">
          <button type="submit" class="button1 ">Üye Ol</button>
        </div>
        </div>
      </div>
      <div class="text3">
          <input type="checkbox" id="checkbox" v-model="checked" @click="checker=!checker" />
          <label for="checkbox" style="margin-left:5px"><a href="#">Gizlilik Politikası</a>, <a href="#"> Açık Rıza Beyanı </a> ve 
            <a href="#"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</label>
        </div>
    </div>
   </div>
   <div class="footer2">
    <div class="center">
      <div class="text4"><b>Bize Katılın! </b>Markanız veya Firmanız adına <b>Kurumsal</b> Üyelik için
        <button class="button2"><b>Kurumsal Üye Hesabı Oluştur</b></button></div>
    </div>
   </div>
   <div class="footer3">
    <div class="center">

    </div>
  </div>
  </footer>
</template>
<script>
export default {
  name:"FooterApp",
  data() {
    return {
      checker:false,
    }
  },
};
</script>
<style scoped>
.center{
  margin:0 auto;
  width: 60%;/*1220px*/
  z-index: 2;
  position: relative;
  align-items: center;
}
.footer1{
  background-color: #25459a;
  height: 13.25rem;
  margin-top:4rem;
}
.footer2{
  background-color: #1d95b3;
  height: 6.625rem;
}
.footer3{
  background-color: #ffffff;
  height: 35.25rem;
}
.text1{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1.2vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  padding-top:2rem;
}
.text2{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 0.75vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  margin-left: 2.4rem;
  line-height: 0.5rem;
  margin: 1rem;
}
.text3{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 0.75vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  margin-left: 0.75rem;
  padding-top: 0.75rem;
}
.text4{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  padding-top:2.5rem;
}
.button1 {
  height: 2.45em; /*40px*/
  width : 10.125em;/*162px*/
  background-color: #fcb101;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.9rem;/*11pt*/
}
.button2 {
  height: 2.45em; /*40px*/
  width : 15em;/*162px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.8rem;/*11pt*/
  margin-left: 1rem;
}
</style>