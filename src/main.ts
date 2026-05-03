import { mount } from './bootstrap';
import type { MeResponse, UserDataCacheService } from 'react-app/bridge';

const container = document.getElementById('app');

type BridgeWindow = Window & {
  __REACT_APP_BRIDGE__?: {
    userDataCacheService?: UserDataCacheService;
  };
};

const setLoadingState = (target: HTMLElement, message: string) => {
  target.innerHTML = `<div style="display:flex;min-height:100vh;align-items:center;justify-content:center;font-family:sans-serif;color:#334155">${message}</div>`;
};

const getUserDataCacheService = async (): Promise<UserDataCacheService | null> => {
  const bridgeWindow = window as BridgeWindow;

  if (bridgeWindow.__REACT_APP_BRIDGE__?.userDataCacheService) {
    return bridgeWindow.__REACT_APP_BRIDGE__.userDataCacheService;
  }

  try {
    const remoteBridge = await import('react-app/bridge');
    return remoteBridge.userDataCacheService ?? null;
  } catch (error) {
    console.error('[main] Failed to load host bridge service', error);
    return null;
  }
};

const waitForUserData = async (service: UserDataCacheService): Promise<MeResponse> => {
  const cachedData = service.getUserData();
  if (cachedData) {
    return cachedData;
  }

  return new Promise((resolve) => {
    const unsubscribe = service.onUserDataUpdate((data) => {
      unsubscribe();
      resolve(data);
    });
  });
};

const bootstrap = async () => {
  if (!container) return;

  setLoadingState(container, 'Aguardando dados do usuario...');

  const service = await getUserDataCacheService();
  if (!service) {
    setLoadingState(container, 'Nao foi possivel conectar ao host.');
    return;
  }

  await waitForUserData(service);
  mount({ container });
};

void bootstrap();
