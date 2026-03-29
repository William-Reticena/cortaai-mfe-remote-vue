<template>
  <VStack class="w-full border rounded-xl cursor-pointer mt-6 border-gray-300">
    <For :each="offerServices" :getKey="(item) => item.id">
      <template #default="{ item }">
        <HStack justify="between" align-items="center" class="w-full p-4 border-b last:border-0 border-gray-300">
          <Box>
            <Typography> {{ item.nmService }} </Typography>
            <Typography variant="body3">{{ item.nrDurationMinutes }} min</Typography>
          </Box>

          <Typography class="text-(--primary) font-semibold"> {{ MaskUtils.formatToBRL(item.vlPrice) }}</Typography>
        </HStack>
      </template>
    </For>
  </VStack>
</template>

<script setup lang="ts">
import { Box, For, HStack, Typography, VStack } from '@/shared/common';
import type { ServiceSectionProps } from './ServiceSectionProps';

import { MaskUtils } from '@/utils/MaskUtils';

defineProps<ServiceSectionProps>();
</script>
