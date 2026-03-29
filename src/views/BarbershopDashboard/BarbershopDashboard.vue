<template>
  <Box class="max-w-3xl mx-auto p-4">
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
import { ref } from 'vue';
import { SelectButton } from 'primevue';

import { useBarbershopDetails } from '@/composables/useBarbers';

import { Box, If, Typography } from '@/shared/common';
import BarberSection from './components/BarberSection/BarberSection.vue';
import InfoSection from './components/InfoSection/InfoSection.vue';
import ScheduleSection from './components/ScheduleSection/ScheduleSection.vue';
import ServiceForm from './components/ServiceForm/ServiceForm.vue';
import ServiceSection from './components/ServiceSection/ServiceSection.vue';

const value = ref('Informações');
const options = ['Informações', 'Serviços', 'Agendamentos'];

const { data: barbershopData } = useBarbershopDetails(1);
</script>
