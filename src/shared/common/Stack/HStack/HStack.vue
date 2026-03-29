<template>
  <Box class="flex flex-row" :class="[gapClass, alignClass, justifyClass]" v-bind="$attrs">
    <slot />
  </Box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Box } from '../..';
import type { HStackProps } from './HStackProps';

const props = withDefaults(defineProps<HStackProps>(), {
  alignItems: 'start',
  justify: 'start',
  gap: 0,
});

const gapClasses: Record<number, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
};

const alignClasses: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses: Record<string, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const gapClass = computed(() => gapClasses[Number(props.gap)] || '');
const alignClass = computed(() => alignClasses[props.alignItems] || 'items-start');
const justifyClass = computed(() => justifyClasses[props.justify] || 'justify-start');
</script>
