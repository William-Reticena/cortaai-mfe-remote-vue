<template>
  <Box> Agendamentos</Box>

  <Box class="flex flex-col gap-4">
    <For :each="[1, 2, 3, 4, 5]" :getKey="(item) => item">
      <template #default="{ item }">
        <Card>
          <template #content>
            <Box class="flex flex-col gap-4">
              <Box class="flex items-center gap-4"> Agendamento {{ item }} </Box>
              <Box class="flex items-center gap-4">
                <Box>Cliente {{ item }}</Box>
                <StatusBadge :isOpen="false" />
              </Box>
            </Box>
          </template>
        </Card>
      </template>
    </For>
  </Box>
</template>

<script setup lang="ts">
import { Card } from 'primevue';

import { Box, For } from '@/shared/common';
import StatusBadge from '../StatusBadge/StatusBadge.vue';
</script>
