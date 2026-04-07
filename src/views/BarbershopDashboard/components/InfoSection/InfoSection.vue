<template>
  <Card>
    <template #title>
      <HStack align-items="center" justify="between" class="mb-6 w-full">
        <Typography variant="h3"> Dados da Barbearia </Typography>

        <If :condition="!editMode">
          <Button size="small" class="p-0" @click="toggleEdit" label="Editar">
            <template #icon>
              <SquarePen class="w-4 h-4" />
            </template>
          </Button>

          <template #else>
            <HStack gap="2">
              <Button size="small" @click="saveChanges" label="Salvar">
                <template #icon>
                  <Save class="w-4 h-4" />
                </template>
              </Button>
              <Button severity="secondary" size="small" @click="resetForm" label="Cancelar">
                <template #icon>
                  <X class="w-4 h-4" />
                </template>
              </Button>
            </HStack>
          </template>
        </If>
      </HStack>
    </template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <InfoItem label="NOME" v-model:value="formValues.nmBarbershop" :editable="editMode" />
        <InfoItem label="ENDEREÇO" v-model:value="formValues.dsAddress" :icon="MapPin" :icon-props="{ class: 'w-4 h-4' }" :editable="editMode" />

        <Box class="flex gap-4">
          <InfoItem class="flex-1" label="TELEFONE" v-model:value="formValues.dsPhone" :display-value="MaskUtils.formatPhone(formValues.dsPhone)" :editable="editMode" />
          <InfoItem class="flex-1" label="ABRE ÀS" v-model:value="formValues.hrOpensAt" :display-value="DateUtils.formatTime(formValues.hrOpensAt)" :editable="editMode" />
          <InfoItem class="flex-1" label="FECHA ÀS" v-model:value="formValues.hrClosesAt" :display-value="DateUtils.formatTime(formValues.hrClosesAt)" :editable="editMode" />
        </Box>
      </Box>

      <Box class="mt-4">
        <HStack align-items="center" gap="4">
          <Typography variant="body3"> STATUS </Typography>

          <If :condition="editMode">
            <ToggleSwitch v-model="formValues.inOpen" />
          </If>
          <StatusBadge :is-open="formValues.inOpen" />
        </HStack>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { Button, Card, ToggleSwitch } from 'primevue';
import { MapPin, Save, SquarePen, X } from '@lucide/vue';

import { Box, HStack, If, Typography } from '@/shared/common';

import { DateUtils } from '@/utils/DateUtils';
import { MaskUtils } from '@/utils/MaskUtils';
import { useUpdateBarbershopDetails } from '@/composables/useBarbers';

import InfoItem from '../InfoItem/InfoItem.vue';
import StatusBadge from '../StatusBadge/StatusBadge.vue';
import type { InfoItemProps } from './InfoSectionProps';

// todo: fazer o rolê da verificação de editmode para não permitir o usuário alterar o status da barbearia para aberto quando
// quando o horário atual for fora do horário de funcionamento cadastrado
// backend validar tbm

const { details } = defineProps<InfoItemProps>();
const { mutate: updateBarbershopDetails } = useUpdateBarbershopDetails();

const editMode = ref(false);
const formValues = ref<Omit<typeof details, 'dtNextAvailableSchedule'>>({ ...details });
const prevValues = ref<Omit<typeof details, 'dtNextAvailableSchedule'>>({ ...details });

watchEffect(() => {
  if (!editMode.value) {
    formValues.value = { ...details };
    prevValues.value = { ...details };
  }
});

function toggleEdit() {
  if (!editMode.value) {
    prevValues.value = { ...formValues.value };
  }

  editMode.value = !editMode.value;
}

function resetForm() {
  formValues.value = { ...prevValues.value };
  editMode.value = false;
}

function saveChanges() {
  updateBarbershopDetails(
    {
      nmBarbershop: formValues.value.nmBarbershop,
      dsAddress: formValues.value.dsAddress,
      dsPhone: formValues.value.dsPhone,
      hrOpensAt: formValues.value.hrOpensAt,
      hrClosesAt: formValues.value.hrClosesAt,
      inOpen: formValues.value.inOpen,
    },
    {
      onSuccess: (data) => {
        prevValues.value = { ...data };
        formValues.value = { ...data };
      },
      onError: (error) => {
        console.error('Error updating barbershop details:', error);
      },
    },
  );

  editMode.value = false;
}
</script>
