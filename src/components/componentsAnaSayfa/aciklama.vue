<template>
      <!--Açıklama-->
  <div class="center">
  <div class="text21"><b>Araç Kiralama</b> - Rent A Car</div>
  <div class="text21">Günümüzde arac satin almanin zorlugu geek bireysel gerekse de kurumsal firmalari arac kiralama hizmetine yonlendirdi. Dünya capinda da oldukça yaygin olarak kullanilan arac kiralama global ismi ile "rent a car" artik bircok kisinin maddi oldugu kadar zamandan da tasarruf etmesini sagliyor. Gelisen turizm ise araç kiralama hizmetinin en büyük destekci. Dün-yanin neresinde olursa olsun toplu tasima araclarina binmek yerine kendine zel bir arabaya binmek isteyenlerin tercihi olan kiralk araclar, seyahat boyunca ozgür olma imkàni da veriyor.
Arac kiralama sadece seyahat ederken degil günlik hayatta da oldukça tercih edilen bir hizmet haline geldi. Arac satin almak, vergi ve kasko odemek, arac bakimina zaman ayirmak gibi bircok bashiktan kullaniciyr kurtaran arac kiralama hizmeti ani zamanda istenilen arabaya binme sansi da taniyor. Ister her daim sizinle olan bir araba olsun isterseniz de sadece ozel günlerinizde araba ihtiyaciniz olsun Kiralacar.com, binlerce araci hizmetinize sunuyor. Bu araclar icinden kolayca seciminizi yapip rezervasyonunuzu olusturabilir ve istediginiz arac
<a v-if="metinController==false" @click="metinController=true" class="text22"> Devamı...</a></div>
<div class="text21" v-if="metinController==true">Günümüzde arac satin almanin zorlugu geek bireysel gerekse de kurumsal firmalari arac kiralama hizmetine yonlendirdi. Dünya capinda da oldukça yaygin olarak kullanilan arac kiralama global ismi ile "rent a car" artik bircok kisinin maddi oldugu kadar zamandan da tasarruf etmesini sagliyor. Gelisen turizm ise araç kiralama hizmetinin en büyük destekci. Dün-yanin neresinde olursa olsun toplu tasima araclarina binmek yerine kendine zel bir arabaya binmek isteyenlerin tercihi olan kiralk araclar, seyahat boyunca ozgür olma imkàni da veriyor.
Arac kiralama sadece seyahat ederken degil günlik hayatta da oldukça tercih edilen bir hizmet haline geldi. Arac satin almak, vergi ve kasko odemek, arac bakimina zaman ayirmak gibi bircok bashiktan kullaniciyr kurtaran arac kiralama hizmeti ani zamanda istenilen arabaya binme sansi da taniyor. Ister her daim sizinle olan bir araba olsun isterseniz de sadece ozel günlerinizde araba ihtiyaciniz olsun Kiralacar.com, binlerce araci hizmetinize sunuyor. Bu araclar icinden kolayca seciminizi yapip rezervasyonunuzu olusturabilir ve istediginiz arac
<a v-if="metinController==true" @click="metinController=false" class="text22"> Gizle...</a></div>
  </div><!--Açıklama bitiş-->
</template>
<script>
export default {
    name: "AnaSayfa",
    components: {

  
    },
    data() {
      return {
  
        metinController:false,
      }
    },
 
    methods: {
  
  
    },
  }
  </script>
  
  <style scoped>

  .center{
    margin:0 auto;
    width: 60%;/*1220px*/
    z-index: 2;
    position: relative;
    align-items: center;
  }
  
  .text21{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 1vw;/*15pt*/
    color: #2a2a2a;
    text-align: center;
  }
  .text22{
    position: relative;
    font-family: "Quicksand" ;
    font-size: 0.9vw;/*15pt*/
    color: #0e3784;
    text-decoration: underline;
  }
  
  
  </style>