import { computed, onMounted } from 'vue';
import { useUserDataStore } from '@/stores/userData';

export const useUserDataCache = () => {
  const userDataStore = useUserDataStore();

  onMounted(() => {
    void userDataStore.initialize();
  });

  return {
    userData: computed(() => userDataStore.userData),
    isLoading: computed(() => userDataStore.isLoading),
  };
};
