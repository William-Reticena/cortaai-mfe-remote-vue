<template>
  <component :is="as" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { BoxProps } from './BoxProps';

defineOptions({ name: 'Box' });
withDefaults(defineProps<BoxProps>(), { as: 'div' });
</script>
