
import {createRouter,createWebHistory} from 'vue-router';


import AnaSayfa from '@/components/AnaSayfa.vue';


//router definition processes
const routes = [
      { path: '/', component: AnaSayfa }, 

    ]

  const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes,
});

export default router;