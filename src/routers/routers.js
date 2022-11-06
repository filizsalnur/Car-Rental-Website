
import {createRouter,createWebHistory} from 'vue-router';


import AnaSayfa from '@/components/AnaSayfa.vue';
import AnaSayfaMobile from '@/components/mobil/anaSayfa/anaSayfa.vue';

//router definition processes
const routes = [
      { path: '/', component: AnaSayfa }, 
      { path: '/ana', component: AnaSayfaMobile }, 
    ]

  const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes,
});

export default router;