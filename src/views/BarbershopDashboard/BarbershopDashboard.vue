<template>
  <Box class="max-w-3xl mx-auto p-4">
    <!-- User Data Display -->
    <div v-if="userData" class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <Typography variant="h4" class="mb-2"> 👤 {{ userData.nmUser }} </Typography>
      <div class="text-sm text-gray-600">
        <p><strong>Email:</strong> {{ userData.dsEmail }}</p>
        <p><strong>Telefone:</strong> {{ userData.dsPhone }}</p>
        <p><strong>Role:</strong> {{ userData.tpRole }}</p>
        <p><strong>Barbearia:</strong> {{ userData.idBarbershop }}</p>
      </div>
    </div>

    <!-- Debug Info -->
    <div v-if="isLoading" class="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <Typography variant="h5">⏳ Carregando dados do usuário...</Typography>
    </div>

    <div v-if="!isLoading && !userData" class="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
      <Typography variant="h5">⚠️ Nenhum usuário autenticado</Typography>
      <p class="text-sm text-gray-600 mt-2">Faça login no Host para ver seus dados aqui.</p>
    </div>

    <SelectButton v-model="value" :options="options" fluid class="mb-6" />

    <template v-if="value === 'Informações'">
      <If :condition="!!barbershopData && !!barbershopData.barbershopDetails">
        <InfoSection :details="barbershopData!.barbershopDetails" />

        <template #else>
          <Box class="text-center text-gray-500">Nenhum dado da barbearia encontrado.</Box>
        </template>
      </If>

      <If :condition="barbershopData && barbershopData.barbers && barbershopData.barbers.length > 0">
        <BarberSection :barbershopData="barbershopData!" />

        <template #else>
          <Box class="text-center text-gray-500">Nenhum barbeiro encontrado.</Box>
        </template>
      </If>
    </template>

    <template v-else-if="value === 'Serviços'">
      <Typography variant="h3" class="mb-4"> Serviços </Typography>

      <ServiceForm />

      <If :condition="barbershopData && barbershopData.offerServices && barbershopData.offerServices.length > 0">
        <ServiceSection :offerServices="barbershopData?.offerServices ?? []" />

        <template #else>
          <Box class="text-center text-gray-500">Nenhum serviço encontrado.</Box>
        </template>
      </If>
    </template>

    <template v-else-if="value === 'Agendamentos'">
      <Box> Agendamentos</Box>

      <ScheduleSection />
    </template>
  </Box>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { SelectButton } from 'primevue';

import { useBarbershopDetails } from '@/composables/useBarbers';
import { useUserDataCache } from '@/composables/useUserDataCache';

import { Box, If, Typography } from '@/shared/common';
import BarberSection from './components/BarberSection/BarberSection.vue';
import InfoSection from './components/InfoSection/InfoSection.vue';
import ScheduleSection from './components/ScheduleSection/ScheduleSection.vue';
import ServiceForm from './components/ServiceForm/ServiceForm.vue';
import ServiceSection from './components/ServiceSection/ServiceSection.vue';

const value = ref('Informações');
const options = ['Informações', 'Serviços', 'Agendamentos'];

const { userData, isLoading } = useUserDataCache();
const barbershopId = computed(() => userData.value?.idBarbershop);
const { data: barbershopData } = useBarbershopDetails(barbershopId);

console.log('👤 [BarbershopDashboard] userData:', userData.value);
console.log('⏳ [BarbershopDashboard] isLoading:', isLoading.value);
</script>
