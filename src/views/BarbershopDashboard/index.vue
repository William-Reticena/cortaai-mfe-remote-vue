<template>
  <h1>{{ msg }}</h1>

  <Card>
    <template #title>Dados da Barbearia</template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <DetailsField label="NOME" value="Barbershop" />
        <DetailsField label="ENDEREÇO" value="Barbershop" />

        <Box class="flex gap-4">
          <DetailsField class="flex-1" label="TELEFONE" value="Barbershop" />
          <DetailsField class="flex-1" label="FECHA ÀS" value="Barbershop" />
        </Box>
      </Box>

      <Box>
        <Box as="span">STATUS</Box>
        <StatusBadge />
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'primevue';

import Box from '@/shared/Box/index.vue';
import DetailsField from './components/DetailsField.vue';
import StatusBadge from './components/StatusBadge.vue';

defineOptions({ name: 'BarbershopDashboard' });
defineProps<{ msg: string }>();
</script>
