<template>
  <RouterView />
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';

import { useUserDataCache } from '@/composables/useUserDataCache';

const router = useRouter();
const route = useRoute();

const { userData, isLoading } = useUserDataCache();
const barbershopId = computed(() => userData.value?.idBarbershop);

watch(
  [isLoading, barbershopId],
  ([loading, idBarbershop]) => {
    if (loading) {
      return;
    }

    if (!idBarbershop && route.path !== '/completar-cadastro') {
      router.replace('/completar-cadastro');
      return;
    }

    if (idBarbershop && route.path !== '/') {
      router.replace('/');
    }
  },
  { immediate: true },
);
</script>
