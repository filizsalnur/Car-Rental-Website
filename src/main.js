
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import LitepieDatepicker from 'litepie-datepicker';
import VueAgile from 'vue-agile'


const app = createApp(App)

import router from "./routers/routers";

Vue.use(VueAgile)
app.use(router)
app.use(LitepieDatepicker);

app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"