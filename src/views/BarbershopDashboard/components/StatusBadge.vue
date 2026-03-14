<template>
  <!-- <Box
    :class="{
      'bg-green-500': true,
      // 'bg-red-500': status === 'closed',
    }"
    class="px-2 py-1 rounded text-white text-sm font-semibold"
  >
    Aberto
  </Box> -->

  <Box as="span" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[rgb(from_var(--status-open)_r_g_b/0.12)] text-(--status-open)">
    <Box as="span" class="w-1.5 h-1.5 rounded-full bg-(--status-open)"></Box>
    Aberto
  </Box>
</template>

<script setup lang="ts">
import Box from '@/shared/Box/index.vue';

// defineProps<DetailsFieldProps>();
</script>
