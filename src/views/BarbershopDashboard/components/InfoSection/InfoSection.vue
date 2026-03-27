<template>
  <Card>
    <template #title>Dados da Barbearia</template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <InfoItem label="NOME" :value="details.nmBarbershop" />
        <InfoItem label="ENDEREÇO" :value="details.dsAddress" />

        <Box class="flex gap-4">
          <InfoItem class="flex-1" label="TELEFONE" :value="MaskUtils.formatPhone(details.dsPhone)" />
          <InfoItem class="flex-1" label="FECHA ÀS" :value="DateUtils.formatTime(details.hrClosesAt)" />
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

import type { InfoItemProps } from './InfoSectionProps';
import { MaskUtils } from '@/utils/MaskUtils';
import { DateUtils } from '@/utils/DateUtils';
import InfoItem from '../InfoItem/InfoItem.vue';
import StatusBadge from '../StatusBadge/StatusBadge.vue';

defineProps<InfoItemProps>();
</script>
