declare module 'react-app/bridge' {
  export class EventEmitter {
    on(eventName: string, callback: (...args: unknown[]) => void): void;
    once(eventName: string, callback: (...args: unknown[]) => void): void;
    off(eventName: string, callback: (...args: unknown[]) => void): void;
    emit(eventName: string, ...args: unknown[]): void;
    removeAllListeners(eventName?: string): void;
  }

  export interface UserDataCacheEvents {
    'user:updated': [userData: MeResponse];
    'user:cleared': [];
  }

  export interface MeResponse {
    nmUser: string;
    dsPhone: string;
    dsEmail: string;
    tpRole: number;
  }

  export class UserDataCacheService {
    static getInstance(): UserDataCacheService;
    setUserData(userData: MeResponse): void;
    getUserData(): MeResponse | null;
    clearCache(): void;
    onUserDataUpdate(callback: (userData: MeResponse) => void): () => void;
    onCacheCleared(callback: () => void): () => void;
    hasUserData(): boolean;
  }

  export const userDataCacheService: UserDataCacheService;
}
