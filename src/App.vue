<template>
  <HeaderApp/>
  <router-view></router-view>

  
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'



export default {
  name: 'App',
  components: {
    HeaderApp,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: #ffffff;
  margin-top: 0px;
  padding: 0;
}

@font-face {
  font-family: "Quicksand";
  src: local("Quicksand"),
   url(./fonts/quicksand/Quicksand-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "PoppinsBold";
  src: local("PoppinsBold"),
   url(./fonts/poppins/Poppins-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
   url(./fonts/poppins/Poppins-Medium.ttf) format("truetype");
}
</style>