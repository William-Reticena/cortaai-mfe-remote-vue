<template>
  <Box class="max-w-3xl mx-auto p-4">
    <SelectButton v-model="tabSelected" :options="tabOptions" fluid class="mb-6" />

    <template v-if="tabSelected === 'Informações'">
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

    <template v-else-if="tabSelected === 'Serviços'">
      <Typography variant="h3" class="mb-4"> Serviços </Typography>

      <ServiceForm />

      <If :condition="barbershopData && barbershopData.offerServices && barbershopData.offerServices.length > 0">
        <ServiceSection :offerServices="barbershopData?.offerServices ?? []" />

        <template #else>
          <Box class="text-center text-gray-500">Nenhum serviço encontrado.</Box>
        </template>
      </If>
    </template>

    <template v-else-if="tabSelected === 'Agendamentos'">
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

const tabSelected = ref('Informações');
const tabOptions = ['Informações', 'Serviços', 'Agendamentos'];

const { userData } = useUserDataCache();
const barbershopId = computed(() => userData.value?.idBarbershop);
const { data: barbershopData } = useBarbershopDetails(barbershopId);
</script>
