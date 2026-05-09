<template>
  <Card class="overflow-hidden border border-slate-200 shadow-sm">
    <template #content>
      <Box class="space-y-5">
        <Box>
          <Typography variant="h4" class="text-slate-900">Serviços</Typography>
          <Typography variant="body2" class="mt-1 text-slate-500">Adicione ao menos um serviço oferecido</Typography>
        </Box>

        <Box class="space-y-3">
          <Box v-for="(service, index) in services" :key="service.id" class="rounded-xl border border-slate-200 bg-white p-3">
            <Box class="grid gap-4 md:grid-cols-[minmax(0,1fr)_120px_120px_auto] md:items-end">
              <Box class="space-y-2">
                <Typography variant="body2" class="font-medium text-slate-700">Nome do serviço</Typography>
                <InputText v-model="service.name" placeholder="Ex.: Corte masculino" fluid />
              </Box>

              <Box class="space-y-2">
                <HStack gap="2" align-items="center" class="text-slate-700">
                  <Clock3 class="h-4 w-4" />
                  <Typography variant="body2" class="font-medium text-slate-700">Min.</Typography>
                </HStack>
                <InputNumber v-model="service.duration" fluid />
              </Box>

              <Box class="space-y-2">
                <HStack gap="2" align-items="center" class="text-slate-700">
                  <DollarSign class="h-4 w-4" />
                  <Typography variant="body2" class="font-medium text-slate-700">Preço</Typography>
                </HStack>
                <InputNumber v-model="service.price" fluid />
              </Box>

              <Button severity="secondary" text class="h-11 w-11 self-end p-0!" :disabled="services.length === 1" @click="emit('remove-service', index)">
                <template #icon>
                  <Trash2 class="h-4 w-4" />
                </template>
              </Button>
            </Box>
          </Box>
        </Box>

        <Button severity="secondary" outlined class="w-full justify-center border-slate-200! bg-slate-50! text-slate-700!" @click="emit('add-service')">
          <template #icon>
            <Plus class="h-4 w-4" />
          </template>
          Adicionar serviço
        </Button>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Button, Card, InputNumber, InputText } from 'primevue';
import { Clock3, DollarSign, Plus, Trash2 } from '@lucide/vue';

import { Box, HStack, Typography } from '@/shared/common';

type ServiceItem = {
  id: number;
  name: string;
  duration: number | null;
  price: number | null;
};

defineProps<{
  services: ServiceItem[];
}>();

const emit = defineEmits<{
  'add-service': [];
  'remove-service': [index: number];
}>();
</script>
