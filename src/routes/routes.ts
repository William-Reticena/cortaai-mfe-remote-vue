import BarbershopDashboard from '@/views/BarbershopDashboard/BarbershopDashboard.vue';
import OnBoarding from '@/views/OnBoarding/OnBoarding.vue';

export const routes = [
  {
    path: '/',
    component: BarbershopDashboard,
  },
  {
    path: '/completar-cadastro',
    component: OnBoarding,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: {
      template: '<h1>404 Not Found</h1>',
    },
  },
];
