import { createApp, type App as VueApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue';

import './style.css';
import { router } from './routes';

let app: VueApp<Element> | null = null;

export type MountProps = {
  container: HTMLElement;
};

export function mount({ container }: MountProps) {
  if (app) return;

  app = createApp(App);
  app.use(router);
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: false,
      },
    },
  });
  app.mount(container);
}

export function unmount() {
  if (!app) return;

  app.unmount();
  app = null;
}

// createApp(App)
//   .use(PrimeVue, {
//     theme: {
//       preset: Aura,
//       options: {
//         darkModeSelector: false,
//       },
//     },
//   })
//   .mount('#app');
