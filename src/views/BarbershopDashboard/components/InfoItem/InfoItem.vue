<template>
  <Box>
    <Typography variant="body3" class="mb-2"> {{ label }} </Typography>

    <HStack align="center" gap="2">
      <If :condition="!!icon">
        <component :is="icon" v-bind="iconProps" />
      </If>
      <Typography variant="body1" class="font-semibold"> {{ value }} </Typography>
    </HStack>
  </Box>
</template>

<script setup lang="ts">
import { Box, HStack, If, Typography } from '@/shared/common';
import type { InfoItemProps } from './InfoItemProps';

defineProps<InfoItemProps>();
</script>
