<template>
  <div class="space">


    <div style="background-color:#e3e9f9">
     <div class="text1">Popüler Havalimanları</div>
  </div>

   

  <div class="text1"><a href="#" class="text2"><font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-right:0.5em;"/>İstanbul Havalimanı [IST]
      </a></div>

      <div class="text1"><a href="#" class="text2"><font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-right:0.5em;"/>İstanbul Havalimanı [IST]
      </a></div>


    
      <div class="text1"><a href="#" class="text2"><font-awesome-icon icon="fa-solid fa-plane-departure" style="margin-right:0.5em;"/>İstanbul Havalimanı [IST]
      </a></div>

    
    <div style="background-color:#e3e9f9">
   <div class="text1">Popüler Lokasyonlar</div>

    </div>


      <div class="text1"><a href="#" class="text2"><font-awesome-icon icon="fa-solid fa-location-dot" style="margin-right:0.5em;"/>İstanbul Ataşehir
      </a></div>

  <div class="text1"><a href="#" class="text2"><font-awesome-icon icon="fa-solid fa-location-dot" style="margin-right:0.5em;"/>İzmir Çeşme
      </a></div>


      <div class="text1"><a href="#" class="text2"><font-awesome-icon icon="fa-solid fa-location-dot" style="margin-right:0.5em;"/>Adana Ceyhan
      </a></div>

</div>
</template>

<script >
import { ref, onMounted } from 'vue';

export default {
  name: "AnaSayfa",
  components: {
 

  },
  data() {
    return {
      aramaBariController:false,
      checkerForm:false,
      tarihController:false,
      metinController:false,
      kiralaController:false,
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
  .space{
    position:absolute;
    z-index:20;
    width:56.5vw;

    margin-top:6vh;
    background-color: #ffffff;

  }

.text1{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1.7vw;/*60pt*/
  color: #2a2a2a;
  text-align: left;
  left:2vw;
  line-height: 4vh;

}
.text2{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1.7vw;/*60pt*/
  color: #2a2a2a;
  text-align: left;

}

</style>