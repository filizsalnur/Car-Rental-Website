
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'

import 'mdb-vue-ui-kit/css/mdb.min.css';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faHeadset,faChevronDown,faSquare,faSquareCheck, faUserPlus, faCaretRight, faMagnifyingGlass, faPlaneDeparture, faLocationArrow, faChevronRight ,faEarthAmericas, faCoins, faCircleXmark, faCircleDown, faLocationDot, faChevronUp, faCircleDot} from '@fortawesome/free-solid-svg-icons'

import 'vue-datepicker-next/index.css';

/* add icons to the library */
library.add(faUserSecret,faHeadset,faChevronDown,faSquare,faSquareCheck,faUserPlus,faTwitter,faFacebook,faInstagram,faYoutube,faCaretRight,faMagnifyingGlass,faPlaneDeparture,faLocationArrow,faChevronRight,faEarthAmericas,faCoins,faCircleXmark,faCircleDown,faLocationDot,faChevronUp,faCircleDot)





const app = createApp(App)

app.component('Datepicker', Datepicker);



import router from "./routers/routers";
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');


import "bootstrap/dist/js/bootstrap.js"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

