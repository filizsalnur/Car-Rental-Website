<template>


  
  <div class="show-on-deskop"> <deskopAracBul/></div>
    <div class="show-on-tablet"> <tabletAracBul/></div>
  <div class="show-on-mobile"> <mobileAracBul/></div>

    <div class="show-on-deskop"> <deskopCards/></div>
    <div class="show-on-tablet"> <deskopCards/></div>
    <div class="show-on-mobile"> <mobileCards/></div>

    <div class="show-on-deskop"> <deskopLokasyonlar/></div>
    <div class="show-on-tablet"> <deskopLokasyonlar/></div>
    <div class="show-on-mobile"><mobileLokasyonlar/></div>

    <div class="show-on-deskop"> <deskopCar/></div>
    <div class="show-on-tablet"> <tabletCar/></div>
    <div class="show-on-mobile"> <mobileCar/></div>

    <div class="show-on-deskop"> <Aciklama/></div>
    <div class="show-on-tablet"> <Aciklama/></div>
    <div class="show-on-mobile"> <mobileAciklama/></div>

    <div class="show-on-deskop"> <deskopBlog/></div>
    <div class="show-on-tablet"> <tabletBlog/></div>
    <div class="show-on-mobile"> <mobileBlog/></div>

    <div class="show-on-deskop"> <FooterApp/></div>
    <div class="show-on-tablet"> <tabletFooter/></div>
    <div class="show-on-mobile"> <mobileFooter/></div>

</template>

<script >
import { ref, onMounted } from 'vue';



import deskopAracBul from './componentsAnaSayfa/aracBul.vue';
import tabletAracBul from './componentsAnaSayfa/tabletAracBul.vue';
import mobileAracBul from './mobil/anaSayfa/companents/aracBul.vue';

import deskopCar from './componentsAnaSayfa/deskopCar.vue';
import tabletCar from './componentsAnaSayfa/tabletCar.vue';
import mobileCar from './mobil/anaSayfa/companents/car.vue';

import deskopCards from './componentsAnaSayfa/deskopCards.vue';
import mobileCards from './mobil/anaSayfa/companents/havalimanları.vue';

import deskopLokasyonlar from './componentsAnaSayfa/deskopLokasyonlar.vue';
import mobileLokasyonlar from './mobil/anaSayfa/companents/lokasyonlar.vue';


import Aciklama from './componentsAnaSayfa/aciklama.vue';
import mobileAciklama from './mobil/anaSayfa/companents/aciklama.vue';

import deskopBlog from './componentsAnaSayfa/blog.vue';
import tabletBlog from './componentsAnaSayfa/tabletBlog.vue';
import mobileBlog from './mobil/anaSayfa/companents/blog.vue';


import FooterApp from './FooterApp.vue';
import tabletFooter from './componentsAnaSayfa/tabletFooter.vue';
import mobileFooter from './mobil/anaSayfa/companents/footer.vue';
export default {
  name: "AnaSayfa",
  components: {
    FooterApp,
    deskopLokasyonlar,
    deskopCards,
    tabletCar,
    mobileCar,
    deskopCar,
    mobileLokasyonlar,
    mobileCards,
    deskopAracBul,
    Aciklama,
    mobileAciklama,
    mobileAracBul,
    deskopBlog,
    tabletFooter,
    mobileFooter, 
    mobileBlog,
    tabletBlog,
    tabletAracBul,
  },
  data() {
    return {
      aramaBariController:false,
      checkerForm:false,
      tarihController:false,
      metinController:false,
    }
  },
  setup() {
        const date = ref();

        // For demo purposes assign range from the current date
        onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
        })
        
        return {
            date,
            countCheck:0,
        }
    },
  methods: {
    check() {
      this.checkerForm=!this.checkerForm;
    },

  },
}
</script>

<style scoped>

</style>