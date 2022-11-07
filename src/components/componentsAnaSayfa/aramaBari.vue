<template>
  <div class="space">
<table class="table">
  <thead>
    <tr style="background-color:#e3e9f9">
      <th scope="col"><div class="text1">Popüler Havalimanları</div></th>

    </tr>
  </thead>
  <tbody>
    <tr>

      <td><div class="text1"><a href="#"><img src="@/images/AnaSayfa/planeIcon.png" alt="icon"  style="margin-right:0.5em;">İstanbul Havalimanı [IST]
      </a></div></td>

    </tr>
    <tr>
      <td><div class="text1"><a href="#"><img src="@/images/AnaSayfa/planeIcon.png" alt="icon"  style="margin-right:0.5em;">İstanbul Havalimanı [IST]
      </a></div></td>


    </tr>
    <tr>
      <td><div class="text1"><a href="#"><img src="@/images/AnaSayfa/planeIcon.png" alt="icon"  style="margin-right:0.5em;">İstanbul Havalimanı [IST]
      </a></div></td>

    </tr>
  </tbody>
  <thead>
    <tr style="background-color:#e3e9f9">
      <th scope="col"><div class="text1">Popüler Lokasyonlar</div></th>

    </tr>
  </thead>
  <tbody>
    <tr>

      <td><div class="text1"><a href="#"><img src="@/images/AnaSayfa/konum.png" alt="icon"  style="margin-right:0.5em;">İstanbul Ataşehir
      </a></div></td>

    </tr>
    <tr>
      <td><div class="text1"><a href="#"><img src="@/images/AnaSayfa/konum.png" alt="icon"  style="margin-right:0.5em;">İzmir Çeşme
      </a></div></td>


    </tr>
    <tr>
      <td><div class="text1"><a href="#"><img src="@/images/AnaSayfa/konum.png" alt="icon"  style="margin-right:0.5em;">Adana Ceyhan
      </a></div></td>

    </tr>
  </tbody>
</table>
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
    width:24vw;
    height:53vh;
    margin-top:7vh;
    background-color: #ffffff;

  }

.background{
  background: url("@/images/AnaSayfa/background.png") ;
  background-repeat: no-repeat;
  background-size:cover;
  height: 80vh;/*739px*/
  width: 100%;
  left:0;
  right:0;
  z-index: 1;
  position:absolute;
  overflow: hidden;
}
.center{
  margin:0 auto;
  width: 60%;/*1220px*/
  z-index: 2;
  position: relative;
  align-items: center;
}
.nav-left{
  margin-left: 0;
  left:0 ;
  position: relative; 
  float: left;
  margin-bottom: 0;
}
.text1{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 1vw;/*60pt*/
  color: #2a2a2a;
  text-align: left;
  left:2vw;

}
.text2{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 5vw; /*60pt*/
  color: #ffffff;
  text-align: left;
  line-height: 4vw;

}
.text3{
  position: relative;
  font-family: "PoppinsBold" ;
  font-size: 1.3vw;
  color: #ffffff;
  text-align: left;
  padding-top: 35px;

}
.text4{
  padding-left: 28px;
  text-align: left;
  position: relative; 

}
.text5{
  padding-left: 28px;

}
.text6{
  margin-top:20px;
  padding-left: 10px;
  color: #ffffff;
  position: relative; 
  float: left;

}
.text7{
  position: relative;
  font-family: "Quicksand" ;
  font-size: 19pt;
  color: #2a2a2a;
  margin-top: 30px;
  float: left;

}

.button1 {
  height: 2.5em; /*40px*/
  width : 10.125em;/*162px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.9rem;/*11pt*/
  margin-right: 6px;/*6px*/
  margin-top: 18px;/*18px*/
  border-radius: 8px;

}
.button2 {
  height: 2.5em; /*40px*/
  width : 10.125em;/*162px*/
  background-color: #25459a;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.9rem;/*11pt*/
  margin-top: 18px;/*18px*/
  border-radius: 8px;

}
.button3 {
    height: 6vh;/*59px*/
  width : 24vw;/*349px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  margin-top: 6px;/*6px*/
  border-radius: 8px;

}
.button4 {
  height: 6vh;/*59px*/
  width : 22.5vw;/*349px*/
  background-color: #ffffff;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 1vw;
  margin-top: 6px;/*6px*/
  border-radius: 8px;
  margin-left:0.5vw;/*15px*/
  float:left;

}
.button5 {
height: 6vh;/*59px*/
  width : 10vw;/*349px*/
  float:right;
  background-color: #e51c3d;
  color: #ffffff;
  border: none;
  font-family: "Quicksand" ;
  font-size: 0.8vw;
  margin-top: 6px;/*6px*/
  margin-left:0.5vw;/*15px*/
  border-radius: 8px;

}

.space1 {
position: relative;
top: 5vh;/*45px*/
z-index: 3;

}

.space3 {
  height: 200px;/*200px*/
  width : 100%;/*1928px*/
  background-color: #e6ecf8;
  color: #2a2a2a;
  border: none;
  font-family: "Quicksand" ;
  font-size: 12pt;
  border-radius: 8px;
  position: relative;
  top: 45px;/*45px*/

}

.image2 {
  margin-top: 4em;/*50px*/
  width:60%;
}
.icon{
  margin-left: 3.8em;/*72px*/
  position: relative; 
  float: left;
  margin-top: -0.2vh;
  top: 0;

}

</style>