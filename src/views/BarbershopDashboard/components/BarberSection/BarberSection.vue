<template>
  <Card class="mt-6">
    <template #title>Barbeiros</template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <For :each="[1, 2, 3, 4, 5]" :getKey="(item) => item">
          <template #default="{ item }">
            <Box class="flex items-center gap-4">
              <Avatar label="U" shape="circle" size="large" style="background-color: #dee9fc; color: #1a2551" />
              <Box>Barbeiro {{ item }}</Box>
            </Box>
          </template>
        </For>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Avatar, Card } from 'primevue';

import { Box, For } from '@/shared/common';
</script>
