
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import LitepieDatepicker from 'litepie-datepicker';


const app = createApp(App)

// router setup
import router from "./routers/routers";
app.use(router)
app.use(LitepieDatepicker);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"