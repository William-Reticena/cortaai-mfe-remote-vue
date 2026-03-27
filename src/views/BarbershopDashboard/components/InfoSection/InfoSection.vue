<template>
  <Card>
    <template #title>Dados da Barbearia</template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <InfoItem label="NOME" value="Barbershop" />
        <InfoItem label="ENDEREÇO" value="Barbershop" />

        <Box class="flex gap-4">
          <InfoItem class="flex-1" label="TELEFONE" value="Barbershop" />
          <InfoItem class="flex-1" label="FECHA ÀS" value="Barbershop" />
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
import { Box } from '@/shared/common';

import InfoItem from '../InfoItem/InfoItem.vue';
import StatusBadge from '../StatusBadge/StatusBadge.vue';
</script>
