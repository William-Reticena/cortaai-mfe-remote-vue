<template>
  <component :is="normalizedVariant(variant)" :class="variantClassMap[variant]" v-bind="$attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { TypographyProps } from './TypographyProps';

withDefaults(defineProps<TypographyProps>(), { variant: 'body1' });

const normalizedVariant = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'body1':
    case 'body2':
    case 'body3':
      return 'p';
    default:
      return 'p';
  }
};

const variantClassMap: Record<NonNullable<TypographyProps['variant']>, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-medium',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  body1: 'text-base',
  body2: 'text-sm',
  body3: 'text-xs',
};
</script>
