import { createRouter, createWebHistory } from 'vue-router';
import BarbershopDashboard from '../views/BarbershopDashboard/BarbershopDashboard.vue';
import Teste from '../views/Teste/index.vue';

export function createAppRouter() {
  return createRouter({
    history: createWebHistory('/b'),
    routes: [
      {
        path: '/',
        component: BarbershopDashboard,
      },
      {
        path: '/dashboard',
        component: Teste,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: {
          template: '<h1>404 Not Found</h1>',
        },
      },
    ],
  });
}
