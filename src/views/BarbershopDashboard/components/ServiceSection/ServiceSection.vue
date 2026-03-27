<template>
  <Card class="mt-6">
    <template #title>Serviços</template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <For :each="[1, 2, 3, 4, 5]" :getKey="(item) => item">
          <template #default="{ item }">
            <Box class="flex items-center gap-4"> Serviço {{ item }} </Box>
          </template>
        </For>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'primevue';

import { Box, For } from '@/shared/common';
</script>
