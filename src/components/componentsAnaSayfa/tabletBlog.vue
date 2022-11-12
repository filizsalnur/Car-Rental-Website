<template>


<div class="center">
  <div class="text21"><b>Güncel</b> Blog</div>
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    </div>

    <div class="carousel-inner" >
      <div class="carousel-item active">
    
        <img src="@/images/AnaSayfa/blog1.png" alt="..." class="image2">
          <img src="@/images/AnaSayfa/blog2.png" alt="..." class="image2">
        <img src="@/images/AnaSayfa/blog1.png" alt="..." class="image3">
    
      </div>
      <div class="carousel-item">
    
    <img src="@/images/AnaSayfa/blog2.png" alt="..." class="image2">
      <img src="@/images/AnaSayfa/blog1.png" alt="..." class="image2">
    <img src="@/images/AnaSayfa/blog2.png" alt="..." class="image3">

  </div>
      </div>
  </div>


</div> <!--div class="center" kapanış-->

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
    text-align: left;
    margin-top:3vh;
  }

.image2 {
  margin-right: 1vw;
  width:18vw;
  float:left;
}
.image3 {

width:18vw;
}


</style>