<template>
  <Card>
    <template #content>
      <Typography variant="body2" class="mb-2">NOVO SERVIÇO</Typography>

      <Box class="flex items-center gap-4 mb-4">
        <Box class="flex-1">
          <InputText size="small" v-model="form.name" placeholder="Nome" fluid />
        </Box>

        <Box class="flex-1">
          <InputNumber size="small" v-model="form.duration" placeholder="Duração (min)" fluid />
        </Box>

        <Box class="flex-1">
          <InputNumber size="small" v-model="form.price" placeholder="Preço (R$)" fluid :min-fraction-digits="2" />
        </Box>
      </Box>

      <HStack gap="2">
        <Button label="Salvar" size="small">
          <template #icon>
            <Save class="w-4 h-4" />
          </template>
        </Button>
        <Button severity="secondary" label="Cancelar" size="small" />
      </HStack>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Card, InputNumber, InputText } from 'primevue';
import { Save } from '@lucide/vue';

import { Box, HStack, Typography } from '@/shared/common';

const form = ref({ name: null, duration: null, price: null });
</script>
