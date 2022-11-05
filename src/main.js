
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'

import 'mdb-vue-ui-kit/css/mdb.min.css';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS

const app = createApp(App)

app.component('Datepicker', Datepicker);

import router from "./routers/routers";
app.use(router);

app.use(SimpleTypeahead);

app.mount('#app');


import "bootstrap/dist/js/bootstrap.js"

