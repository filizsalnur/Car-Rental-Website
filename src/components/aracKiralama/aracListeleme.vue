<template>
<div class="show-on-deskop"> <deskopAramaBari/></div>
    <div class="show-on-tablet"> <deskopAramaBari/></div>

    <div class="show-on-deskop"> <deskopListeleme/></div>
    <div class="show-on-tablet"> <deskopListeleme/></div>
</template>

<script >
import deskopAramaBari from './aramaBari.vue';

import deskopListeleme from './deskopListeleme';


export default {
  name: "aracListeleme",
  components: {
    deskopAramaBari,
    deskopListeleme,
  },
  data() {
    return {
  
    }
  },

  methods: {
    

  },
}
</script>

<style scoped>

</style>