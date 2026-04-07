<template>
  <Box>
    <Typography variant="body3" class="mb-2"> {{ label }} </Typography>

    <HStack align-items="center" gap="2">
      <If :condition="!!icon && !editable">
        <component :is="icon" v-bind="iconProps" />
      </If>

      <If :condition="editable">
        <InputText type="text" v-model="formValue" fluid />

        <template #else>
          <Typography variant="body1" class="font-semibold"> {{ displayValue ?? formValue }} </Typography>
        </template>
      </If>
    </HStack>
  </Box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { InputText } from 'primevue';

import { Box, HStack, If, Typography } from '@/shared/common';
import type { InfoItemProps } from './InfoItemProps';

const props = defineProps<InfoItemProps>();
const emit = defineEmits<{
  'update:value': [value: string]
}>();

const formValue = computed({
  get: () => String(props.value ?? ''),
  set: (newValue) => emit('update:value', newValue)
});
</script>
