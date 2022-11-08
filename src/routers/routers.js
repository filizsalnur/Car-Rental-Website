
import {createRouter,createWebHistory} from 'vue-router';


import AnaSayfa from '@/components/AnaSayfa.vue';
import aracListeleme from '@/components/aracKiralama/aracListeleme.vue'


//router definition processes
const routes = [
      { path: '/', component: AnaSayfa }, 
      { path: '/kiralama', component: aracListeleme }, 
    ]

  const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes,
});

export default router;