import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes';

export function createAppRouter() {
  return createRouter({
    history: createWebHistory('/b'),
    routes,
  });
}
