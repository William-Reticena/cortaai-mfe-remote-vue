<template>
  <SelectButton v-model="value" :options="options" fluid />

  <template v-if="value === 'Informações'">
    <Card>
      <template #title>Dados da Barbearia</template>
      <template #content>
        <Box class="flex flex-col gap-4">
          <DetailsField label="NOME" value="Barbershop" />
          <DetailsField label="ENDEREÇO" value="Barbershop" />

          <Box class="flex gap-4">
            <DetailsField class="flex-1" label="TELEFONE" value="Barbershop" />
            <DetailsField class="flex-1" label="FECHA ÀS" value="Barbershop" />
          </Box>
        </Box>

        <Box>
          <Box as="span">STATUS</Box>
          <StatusBadge />
        </Box>
      </template>
    </Card>

    <Card>
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

  <template v-else-if="value === 'Serviços'">
    <Card>
      <template #content>
        <Box>NOVO SERVIÇO</Box>

        <Box class="flex items-center gap-4">
          <Box class="flex-1">
            <InputText v-model="form.name" placeholder="Nome" fluid />
          </Box>

          <Box class="flex-1">
            <InputNumber v-model="form.duration" placeholder="Duração (min)" fluid :min-fraction-digits="2" />
          </Box>

          <Box class="flex-1">
            <InputNumber v-model="form.price" placeholder="Preço (R$)" fluid :min-fraction-digits="2" />
          </Box>
        </Box>

        <Button> Salvar </Button>
        <Button severity="secondary"> Cancelar </Button>
      </template>
    </Card>

    <Card>
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

  <template v-else-if="value === 'Agendamentos'">
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
                  <StatusBadge />
                </Box>
              </Box>
            </template>
          </Card>
        </template>
      </For>
    </Box>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Avatar, Button, Card, InputNumber, InputText, SelectButton } from 'primevue';

import Box from '@/shared/Box/index.vue';
import DetailsField from './components/DetailsField.vue';
import StatusBadge from './components/StatusBadge.vue';
import For from '@/shared/common/For/For.vue';

defineOptions({ name: 'BarbershopDashboard' });

const value = ref('Informações');
const options = ['Informações', 'Serviços', 'Agendamentos'];
const form = ref({ name: null, duration: null, price: null });
</script>
