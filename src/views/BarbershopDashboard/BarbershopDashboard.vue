<template>
  <Box class="max-w-3xl mx-auto p-4">
    <SelectButton v-model="value" :options="options" fluid class="mb-6" />

    <template v-if="value === 'Informações'">
      <InfoSection />

      <BarberSection />
    </template>

    <template v-else-if="value === 'Serviços'">
      <ServiceForm />

      <ServiceSection />
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

import { Box } from '@/shared/common';
import BarberSection from './components/BarberSection/BarberSection.vue';
import InfoSection from './components/InfoSection/InfoSection.vue';
import ScheduleSection from './components/ScheduleSection/ScheduleSection.vue';
import ServiceForm from './components/ServiceForm/ServiceForm.vue';
import ServiceSection from './components/ServiceSection/ServiceSection.vue';

const value = ref('Informações');
const options = ['Informações', 'Serviços', 'Agendamentos'];
</script>
