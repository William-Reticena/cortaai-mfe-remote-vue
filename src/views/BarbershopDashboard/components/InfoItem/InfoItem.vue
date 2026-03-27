<template>
  <Box>
    <Box> {{ label }} </Box>
    <Box class="mt-2 font-semibold"> {{ value }} </Box>
  </Box>
</template>

<script setup lang="ts">
import { Box } from '@/shared/common';
import type { InfoItemProps } from './InfoItemProps';

defineProps<InfoItemProps>();
</script>
