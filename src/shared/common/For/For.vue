<template>
  <template v-if="each.length > 0">
    <template v-for="(item, index) in each" :key="getKey ? getKey(item, index) : index">
      <slot :item="item" :index="index" />
    </template>
  </template>

  <template v-else>
    <slot name="fallback" />
  </template>
</template>

<script setup lang="ts" generic="T">
defineProps<{ each: T[]; getKey?: (item: T, index: number) => string | number }>();
</script>
