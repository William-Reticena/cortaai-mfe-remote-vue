<template>
  <template v-if="isTruthy(condition)">
    <slot />
  </template>
  <template v-else-if="elseCondition">
    <slot name="else" />
  </template>
</template>

<script setup lang="ts">
import type { IfProps } from './IfProps';

defineProps<IfProps>();

function isTruthy(condition: IfProps['condition']): boolean {
  if (typeof condition === 'boolean') return condition;

  if (Array.isArray(condition)) return condition.length > 0;

  if (typeof condition === 'object' && condition !== null) return Object.keys(condition).length > 0;

  return !!condition;
}
</script>
