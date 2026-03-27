<template>
  <Card>
    <template #content>
      <Box>NOVO SERVIÇO</Box>

      <Box class="flex items-center gap-4">
        <Box class="flex-1">
          <InputText v-model="form.name" placeholder="Nome" fluid />
        </Box>

        <Box class="flex-1">
          <InputNumber v-model="form.duration" placeholder="Duração (min)" fluid />
        </Box>

        <Box class="flex-1">
          <InputNumber v-model="form.price" placeholder="Preço (R$)" fluid :min-fraction-digits="2" />
        </Box>
      </Box>

      <Button> Salvar </Button>
      <Button severity="secondary"> Cancelar </Button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Card, InputNumber, InputText } from 'primevue';

import { Box } from '@/shared/common';

const form = ref({ name: null, duration: null, price: null });
</script>
