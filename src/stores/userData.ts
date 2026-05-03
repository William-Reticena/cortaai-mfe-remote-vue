import { defineStore } from 'pinia';
import type { MeResponse, UserDataCacheService } from 'react-app/bridge';
import { DEV_FALLBACK_USER } from '@/mock/userData';

const isDevMockEnabled = import.meta.env.DEV && import.meta.env.VITE_USE_DEV_USER_MOCK !== 'false';

type BridgeWindow = Window & {
  __REACT_APP_BRIDGE__?: {
    userDataCacheService?: UserDataCacheService;
  };
};

export const useUserDataStore = defineStore('userData', {
  state: () => ({
    userData: null as MeResponse | null,
    isLoading: true,
    isInitialized: false,
    service: null as UserDataCacheService | null,
    unsubscribeUserData: null as (() => void) | null,
    unsubscribeCacheCleared: null as (() => void) | null,
    initPromise: null as Promise<void> | null,
  }),
  getters: {
    barbershopId: (state) => state.userData?.idBarbershop,
  },
  actions: {
    async loadService() {
      if (this.service) {
        return this.service;
      }

      const bridgeWindow = window as BridgeWindow;

      if (bridgeWindow.__REACT_APP_BRIDGE__?.userDataCacheService) {
        this.service = bridgeWindow.__REACT_APP_BRIDGE__.userDataCacheService;
        return this.service;
      }

      try {
        const remoteBridge = await import('react-app/bridge');
        this.service = remoteBridge.userDataCacheService ?? null;
        return this.service;
      } catch (error) {
        console.error('[userDataStore] Falha ao carregar bridge do host', error);
        return null;
      }
    },

    async initialize() {
      if (this.isInitialized) {
        return;
      }

      if (this.initPromise) {
        return this.initPromise;
      }

      this.initPromise = (async () => {
        this.isLoading = true;
        const service = await this.loadService();

        if (!service) {
          if (isDevMockEnabled) {
            this.userData = DEV_FALLBACK_USER;
            this.isInitialized = true;
          }

          this.isLoading = false;
          return;
        }

        this.userData = service.getUserData();
        if (!this.userData && isDevMockEnabled) {
          this.userData = DEV_FALLBACK_USER;
        }

        this.unsubscribeUserData = service.onUserDataUpdate((data) => {
          this.userData = data;
        });

        this.unsubscribeCacheCleared = service.onCacheCleared(() => {
          this.userData = isDevMockEnabled ? DEV_FALLBACK_USER : null;
        });

        this.isInitialized = true;
        this.isLoading = false;
      })();

      await this.initPromise;
    },

    dispose() {
      this.unsubscribeUserData?.();
      this.unsubscribeCacheCleared?.();
      this.unsubscribeUserData = null;
      this.unsubscribeCacheCleared = null;
      this.isInitialized = false;
      this.initPromise = null;
    },
  },
});
