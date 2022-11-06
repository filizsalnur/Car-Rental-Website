<template>
  <footer class="footer">
   <div class="footer1">
    <div class="center">
      <div class="container">
        <div class="text1"><img src="@/images/Footer/logo.png" alt="..." style="margin-right:1.5vw">Şimdi Üye Olun!</div>
        <div class="text2">Şize özel kampanyalardan ve indirimlerden faydalanın. Rezervasyonlarınızı kolayca yönetin.</div>
     
  
          <div class="row g-1">
          <div class="col-6">
          <input type="email" class="form-control" id="ad" placeholder="Adınız">
          </div>
          <div class="col-6">
          <input type="email" class="form-control" id="soyad" placeholder="Soyadınız">
          </div>
          <div class="row g-1" >
          <div class="col-6">
          <input type="email" class="form-control" id="e-posta" placeholder="E-posta Adresiniz">
          </div>
          <div class="col-6">
          <input type="email" class="form-control" id="parola" placeholder="Parolanız">
          </div>
         </div>
        </div>
         
          <div class="checkLine">
          <div style="padding-top:0;top:0"><input type="checkbox" id="checkbox" v-model="checked" @click="checker=!checker" /></div>
          <div class="text3"><a href="#">Gizlilik Politikası</a>, <a href="#"> Açık Rıza Beyanı </a> ve 
            <a href="#"> Aydınlatma Metnini</a> okuduğumu ve onayladığımı kabul ediyorum.</div>
        
        </div>
         
          <button type="submit" class="button1 ">Üye Ol</button>
       
        
     
      </div>
     
    </div>
   </div>
   <div class="footer2">
    <div class="center">
      <div class="text4"><b>Bize Katılın! </b>Markanız veya Firmanız adına <b>Kurumsal</b> Üyelik için
        <div><button class="button2"><b>Kurumsal Üye Hesabı Oluştur</b></button></div></div>
    </div>
   </div>

   <div class="footer3">
    <div class="center">


        <div style="margin-left:20vw;margin-bottom:3vh">
          <div class="text5"><b>Kiracalar</b></div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Müşteri Hizmetleri</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Kiracalar Blog</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Bize Ulaşın</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">İnsan Kaynakları</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Hakkımızda</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Sıkça Sorulan Sorular</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Kampanyalar</div>       
        </div>
        <div style="margin-left:20vw;margin-bottom:3vh">
          <div class="text5"><b>Popüler Havalimanları</b></div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">İstanbul Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Sabiha Gökçen Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Esenboğa Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Antalya Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Adnan Menderes Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Adana Havalimanı</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Tüm Havalimanları</div>   
        </div>
        <div style="margin-left:20vw;margin-bottom:3vh">
          <div class="text5"><b>Popüler Rent A Car Firmaları</b></div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Garenta</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Rentgo</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Green Motion</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Asist Car Rental</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Central</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Novacar</div>
          <div class="text5"><img src="@/images/Footer/logo2.png" alt="..." style="margin-right:1rem">Tüm Firmalar</div>   
  
        </div>
        <div  style="margin-bottom:1vh">
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
        </div>
        <div  style="margin-bottom:1vh">
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
        </div>
        <div  style="margin-bottom:1vh">
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
        
          
          <div class="row">
            <div class="col-4"></div>
            <div class="col-1">
              <a href="#"><img src="@/images/Footer/facebook.png" alt="..."></a>
            </div>
            <div class="col-1">
              <a href="#"><img src="@/images/Footer/instagram.png" alt="..." ></a>
            </div>
            <div class="col-1">
              <a href="#"><img src="@/images/Footer/youtube.png" alt="..." ></a>
            </div>
            <div class="col-1">
              <a href="#"><img src="@/images/Footer/twitter.png" alt="..." ></a>
            </div>
            <div class="col-1"></div>
       </div>
      
      <div class="text7"><a href="#">Gizlilik Politikası </a> | <a href="#"> Açık Rıza Beyanı </a></div>
            <div class="text7"> <a href="#"> Aydınlatma Metni </a> | <a href="#"> Veri İşleme Politikası </a></div>
      </div>
      <div style="margin-top:1vh">
        <img src="@/images/Footer/cart1.png" alt="..." style="width:10%">
        <img src="@/images/Footer/cart2.png" alt="..." style="margin-left:0.25rem;width:10%">
        <img src="@/images/Footer/cart3.png" alt="..." style="margin-left:0.25rem;width:10%">
        <img src="@/images/Footer/cart4.png" alt="..." style="margin-left:0.25rem;width:10%">
        <img src="@/images/Footer/cart5.png" alt="..." style="margin-left:0.25rem;width:45%">
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
    }
  },
};
</script>
<style scoped>
.center{
  margin:0 auto;
  width: 90%;/*1220px*/
  z-index: 2;
  position: relative;
  align-items: center;
}
.footer1{
  background-color: #25459a;
  height: 40vh;
  margin-top:4rem;
  width: 100vw;
}
.footer2{
  background-color: #1d95b3;
  height: 10vh;
}
.footer3{
  background-color: #ffffff;
  height:150vh;
}
.logo{
width: 20vw;
text-align: center;
display:flex;
justify-content: space-between;
align-items: center;

}
.checkLine{

text-align: center;
display:flex;
justify-content: space-between;
align-items: center;

}

.text1{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 4vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  padding-top:1vh;
}
.text2{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 2.5vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  padding-left:7.4vw;
  line-height: 2.7vw;
  margin-bottom: 2vh;
}
.text3{
  position: relative;
  font-family: "Quicksand" ;
  font-size:3vw;/*20pt*/
  color: #ffffff;
  text-align: left;
  margin-bottom: 2vh;
  margin-top: 2.5vh;
  line-height: 2vh;
}
.text4{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 2.5vw;/*20pt*/
  color: #ffffff;
  text-align: center;
  padding-top:2vh;
  margin-bottom:3vh;
}
.text5{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 3vw;/*20pt*/
  color: #2a2a2a;
  text-align: left;
  padding-top:0.75rem;
}
.text6{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 3vw;/*20pt*/
  color: #2a2a2a;
  text-align: left;
}
.text7{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 3vw;/*20pt*/
  color: #2a2a2a;
  text-align: center;
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

}
.button3 {
  height: 10vw;/*34px*/
  width : 50vw;/*126px*/
  background-color: transparent;
  color: #2a2a2a;
  border: 1px solid #2a2a2a;
  font-family: "Quicksand" ;
  font-size: 2vw;
  border-radius: 3px;
}
</style>