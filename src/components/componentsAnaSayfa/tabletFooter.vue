<template>
  <footer class="footer">
   <div class="footer1">
    <div class="center">
      <div class="container">
        <div class="text1"><font-awesome-icon icon="fa-solid fa-user-plus" /> Şimdi Üye Olun!</div>
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
          <button type="submit" class="button1 "><b>Üye Ol</b></button>
        </div>
        </div>
      </div>
      <div class="text3">
        <div v-if="checkerForm==false" @click="check()"><font-awesome-icon icon="fa-solid fa-square" /> <a href="#" class="a"> Gizlilik Politikası</a>, <a href="#" class="a"> Açık Rıza Beyanı </a> ve 
            <a href="#" class="a"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
        <div v-if="checkerForm==true" @click="check()"><font-awesome-icon icon="fa-solid fa-square-check" /><a href="#" class="a"> Gizlilik Politikası</a>, <a href="#" class="a"> Açık Rıza Beyanı </a> ve 
            <a href="#" class="a"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
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
      <div class="container">
      
        <div class="row g-1">
        <div class="col-4">
          <div class="text5"><b>Kiracalar</b></div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Müşteri Hizmetleri</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Kiracalar Blog</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Bize Ulaşın</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">İnsan Kaynakları</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Hakkımızda</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Sıkça Sorulan Sorular</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Kampanyalar</div>       
        </div>
        <div class="col-4">
          <div class="text5"><b>Popüler Havalimanları</b></div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">İstanbul Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Sabiha Gökçen Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Esenboğa Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Antalya Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Adnan Menderes Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Adana Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Tüm Havalimanları</div>   
        </div>
        <div class="col-4">
          <div class="text5"><b>Popüler Rent A Car Firmaları</b></div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Garenta</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Rentgo</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Green Motion</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Asist Car Rental</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Central</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Novacar</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Tüm Firmalar</div>   
        </div>
        </div>
        </div>
      </div>
        <div class=container>
          <div style="padding-top: 4rem;"></div>
          <div class="row">
            <div class="col">
          <button class="button3">
            <div class="row">
              <div class="col-3">
                <img src="@/images/Footer/apple.png" alt="..." style="margin:0 auto">
              </div>
              <div class="col-9">
                <div class="text6"><b>App Store'dan İndirin</b></div>
                <div class="text6" style="line-height:0.5rem">Download App Store</div>
              </div>
            </div>
          </button>
          <button class="button3">
            <div class="row">
              <div class="col-3">
                <img src="@/images/Footer/play.png" alt="..." style="margin:0 auto">
              </div>
              <div class="col-9">
                <div class="text6"><b>Google Play'den İndirin</b></div>
                <div class="text6" style="line-height:0.5rem">Download Google Play</div>
              </div>
            </div>
          </button>
          <button class="button3">
            <div class="row">
              <div class="col-3">
                <img src="@/images/Footer/huawei.png" alt="..." style="margin:0 auto">
              </div>
              <div class="col-9">
                <div class="text6"><b>App Galery'den İndirin</b></div>
                <div class="text6" style="line-height:0.5rem">Download App Galery</div>
              </div>
            </div>
          </button>
        </div>
          </div>
          <div class="row" style="margin-top:2vh">
            <div class="col-4"></div>
            <div class="col-4">
          <div class="logo" >
            <div >
              <a href="#" class="a2"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
            </div>
            <div>
              <a href="#" class="a2"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </div>
            <div >
              <a href="#" class="a2"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
            </div>
            <div >
              <a href="#" class="a2"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
            </div>
        </div>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="text7"><a href="#">Gizlilik Politikası </a> | <a href="#"> Açık Rıza Beyanı </a> | 
            <a href="#"> Aydınlatma Metni </a> | <a href="#"> Veri İşleme Politikası </a></div>
      </div>
      <div style="margin-top:1rem">
        <img src="@/images/Footer/cart1.png" alt="..." >
        <img src="@/images/Footer/cart2.png" alt="..." style="margin-left:0.25rem">
        <img src="@/images/Footer/cart3.png" alt="..." style="margin-left:0.25rem">
        <img src="@/images/Footer/cart4.png" alt="..." style="margin-left:0.25rem">
        <img src="@/images/Footer/cart5.png" alt="..." style="margin-left:0.25rem">
      </div>
      <div class="text7"><a href="#">Kiralacar.com </a> | <a href="#"> Kiralacar Teknoloji Turizm Yatırım A.Ş. </a></div>
      </div>
  </footer>
</template>
<script>
export default {
  name:"FooterApp",
  data() {
    return {
      checker:false,
      checkerForm:false,
    }
  },
  methods: {
    check() {
      this.checkerForm=!this.checkerForm;
    },

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
  width: 100%;
}
.footer2{
  background-color: #1d95b3;
  height: 6.625rem;
}
.footer3{
  background-color: #ffffff;
  height: 35.25rem;
}
.logo{
width: 20vw;
text-align: center;
display:flex;
justify-content: space-between;
align-items: center;

}
.a{
  color:#ffffff;
  text-decoration: underline;
}
.a2{
  color:#2a2a2a;

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
  font-size: 1vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  line-height: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.text3{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 0.9vw;/*20pt*/
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
.text5{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1vw;/*20pt*/
  color: #2a2a2a;
  text-align: left;
  padding-top:0.75rem;
}
.text6{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1vw;/*20pt*/
  color: #2a2a2a;
  text-align: left;
}
.text7{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1vw;/*20pt*/
  color: #2a2a2a;
  text-align: center;
  margin-top:2.75rem;
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
.button3 {
  height: 4vw;/*34px*/
  width : 18vw;/*126px*/
  background-color: transparent;
  color: #2a2a2a;
  border: 1px solid #2a2a2a;
  font-family: "Quicksand" ;
  font-size: 0,6669rem;

  margin-right: 0.8em;
  margin-top: 1em;
  border-radius: 3px;
}
</style>