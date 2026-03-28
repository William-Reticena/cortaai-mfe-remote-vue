<template>
  <Card>
    <template #title>
      <Typography variant="h3" class="mb-6"> Dados da Barbearia </Typography>
    </template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <InfoItem label="NOME" :value="details.nmBarbershop" />
        <InfoItem label="ENDEREÇO" :value="details.dsAddress" :icon="MapPin" :icon-props="{ class: 'w-4 h-4' }" />

        <Box class="flex gap-4">
          <InfoItem class="flex-1" label="TELEFONE" :value="MaskUtils.formatPhone(details.dsPhone)" />
          <InfoItem class="flex-1" label="FECHA ÀS" :value="DateUtils.formatTime(details.hrClosesAt)" />
        </Box>
      </Box>

      <Box class="mt-4">
        <HStack align-items="center" gap="4">
          <Typography variant="body3"> STATUS </Typography>

          <StatusBadge :is-open="details.inOpen" />
        </HStack>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'primevue';
import { MapPin } from '@lucide/vue';

import { Box, HStack, Typography } from '@/shared/common';

import { MaskUtils } from '@/utils/MaskUtils';
import { DateUtils } from '@/utils/DateUtils';

import InfoItem from '../InfoItem/InfoItem.vue';
import StatusBadge from '../StatusBadge/StatusBadge.vue';
import type { InfoItemProps } from './InfoSectionProps';

defineProps<InfoItemProps>();
</script>
