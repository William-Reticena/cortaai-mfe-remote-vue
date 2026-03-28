<template>
  <Box class="flex flex-row" :class="[gapClass, alignClass, justifyClass]" v-bind="$attrs">
    <slot />
  </Box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Box } from '..';
import type { HStackProps } from './HStackProps';

const props = withDefaults(defineProps<HStackProps>(), {
  align: 'start',
  justify: 'start',
});

const gapClass = computed(() => {
  if (props.gap == null) {
    return '';
  }

  return `gap-${props.gap}`;
});

const alignClass = computed(() => `items-${props.align}`);
const justifyClass = computed(() => `justify-${props.justify}`);
</script>
