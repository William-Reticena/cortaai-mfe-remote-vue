<template>
  <Card class="overflow-hidden border border-slate-200 shadow-sm">
    <template #content>
      <Box class="space-y-5">
        <Box>
          <Typography variant="h4" class="text-slate-900">Informações da barbearia</Typography>
          <Typography variant="body2" class="mt-1 text-slate-500">Dados básicos do estabelecimento</Typography>
        </Box>

        <Box class="space-y-5">
          <Box class="space-y-2">
            <HStack gap="2" align-items="center" class="text-slate-700">
              <Scissors class="h-4 w-4" />
              <Typography variant="body2" class="font-medium text-slate-700">Nome da barbearia</Typography>
            </HStack>
            <InputText placeholder="Ex.: Barbearia Estilo" fluid />
          </Box>

          <Box class="space-y-2">
            <HStack gap="2" align-items="center" class="text-slate-700">
              <MapPin class="h-4 w-4" />
              <Typography variant="body2" class="font-medium text-slate-700">Endereço</Typography>
            </HStack>
            <InputText placeholder="Rua, número - bairro" fluid />
          </Box>

          <Box class="grid gap-4 md:grid-cols-3">
            <Box class="space-y-2">
              <HStack gap="2" align-items="center" class="text-slate-700">
                <Phone class="h-4 w-4" />
                <Typography variant="body2" class="font-medium text-slate-700">Telefone</Typography>
              </HStack>
              <InputMask mask="+55 99 99999-9999" placeholder="+55 11 99999-9999" fluid />
            </Box>

            <Box class="space-y-2">
              <HStack gap="2" align-items="center" class="text-slate-700">
                <Clock3 class="h-4 w-4" />
                <Typography variant="body2" class="font-medium text-slate-700">Abre às</Typography>
              </HStack>
              <InputMask mask="99:99" slot-char="-" placeholder="--:--" fluid />
            </Box>

            <Box class="space-y-2">
              <HStack gap="2" align-items="center" class="text-slate-700">
                <Clock3 class="h-4 w-4" />
                <Typography variant="body2" class="font-medium text-slate-700">Fecha às</Typography>
              </HStack>
              <InputMask mask="99:99" slot-char="-" placeholder="--:--" fluid />
            </Box>
          </Box>

          <Box class="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <Box class="space-y-1">
              <Typography variant="body2" class="font-medium text-slate-800"> Abrir automaticamente </Typography>
              <Typography variant="body3" class="text-slate-500"> A barbearia ficará com status de aberta de acordo com o horário configurado. </Typography>
            </Box>

            <ToggleSwitch :modelValue="false" disabled />
          </Box>
        </Box>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Card, InputMask, InputText, ToggleSwitch } from 'primevue';
import { Clock3, MapPin, Phone, Scissors } from '@lucide/vue';

import { Box, HStack, Typography } from '@/shared/common';
</script>
