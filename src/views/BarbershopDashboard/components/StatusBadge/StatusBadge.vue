<template>
  <Box as="span" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase" :class="[style.bg, style.text]">
    <Box as="span" class="w-1.5 h-1.5 rounded-full" :class="style.dot"></Box>
    {{ style.label }}
  </Box>
</template>

<script setup lang="ts">
import { Box } from '@/shared/common';
import type { StatusBadgeProps } from './StatusBadgeProps';

const { isOpen } = defineProps<StatusBadgeProps>();

const statusStyles = {
  open: {
    bg: 'bg-[rgb(from_var(--status-open)_r_g_b/0.12)]',
    text: 'text-(--status-open)',
    dot: 'bg-(--status-open)',
    label: 'Aberto',
  },
  closed: {
    bg: 'bg-[rgb(from_var(--status-closed)_r_g_b/0.12)]',
    text: 'text-(--status-closed)',
    dot: 'bg-(--status-closed)',
    label: 'Fechado',
  },
};

const style = isOpen ? statusStyles.open : statusStyles.closed;
</script>
