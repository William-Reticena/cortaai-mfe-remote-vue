<template>
  <Box class="min-h-screen bg-slate-50 px-4 py-10">
    <Box class="mx-auto flex w-full max-w-5xl flex-col items-stretch gap-8">
      <Box class="flex flex-col items-center gap-4 text-center">
        <Box class="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-(--primary) shadow-sm">
          <Scissors class="h-6 w-6" />
        </Box>

        <Box>
          <Typography variant="h2" class="font-serif text-4xl text-slate-900"> Configure sua barbearia </Typography>
          <Typography variant="body1" class="mt-2 text-slate-500"> Para começar, precisamos das informações básicas do seu estabelecimento </Typography>
        </Box>
      </Box>

      <BarbershopInfoSection />

      <ServicesSection :services="services" @add-service="addService" @remove-service="removeService" />

      <EmployeeSection :services="services" />

      <Box class="flex justify-end">
        <Button class="min-w-44! border-(--primary)! bg-(--primary)! px-8! py-3! text-white!"> Concluir cadastro </Button>
      </Box>
    </Box>
  </Box>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'primevue';
import { Scissors } from '@lucide/vue';

import { Box, Typography } from '@/shared/common';
import BarbershopInfoSection from './components/BarbershopInfoSection/BarbershopInfoSection.vue';
import ServicesSection from './components/ServicesSection/ServicesSection.vue';
import EmployeeSection from './components/EmployeeSection/EmployeeSection.vue';

type ServiceItem = {
  id: number;
  name: string;
  duration: number | null;
  price: number | null;
};

const createService = (id: number): ServiceItem => ({
  id,
  name: '',
  duration: 45,
  price: 50,
});

const services = ref<ServiceItem[]>([createService(1)]);
let nextServiceId = 2;

function addService() {
  services.value.push(createService(nextServiceId));
  nextServiceId += 1;
}

function removeService(index: number) {
  if (services.value.length === 1) {
    return;
  }

  services.value.splice(index, 1);
}
</script>
