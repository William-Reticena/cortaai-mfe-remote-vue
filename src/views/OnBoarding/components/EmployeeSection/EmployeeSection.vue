<template>
  <Card class="overflow-hidden border border-slate-200 shadow-sm">
    <template #content>
      <Box class="space-y-5">
        <Box>
          <Typography variant="h4" class="text-slate-900">Funcionários</Typography>
          <Typography variant="body2" class="mt-1 text-slate-500">Adicione ao menos um barbeiro da sua equipe</Typography>
        </Box>

        <Box class="space-y-3">
          <Box v-for="(employee, index) in employees" :key="employee.id" class="rounded-xl border border-slate-200 bg-white p-3">
            <Box class="space-y-3">
              <Box class="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <Box class="space-y-2">
                  <HStack gap="2" align-items="center" class="text-slate-700">
                    <UserRound class="h-4 w-4" />
                    <Typography variant="body2" class="font-medium text-slate-700">Nome do barbeiro</Typography>
                  </HStack>
                  <InputText v-model="employee.name" placeholder="Ex.: Diego Santos" fluid />
                </Box>

                <Button severity="secondary" text class="h-11 w-11 self-end p-0!" :disabled="employees.length === 1" @click="removeEmployee(index)">
                  <template #icon>
                    <Trash2 class="h-4 w-4" />
                  </template>
                </Button>
              </Box>

              <Box v-if="services.length > 0" class="space-y-2 border-t border-slate-200 pt-3">
                <Typography variant="body2" class="font-medium text-slate-700">Serviços oferecidos</Typography>
                <Box class="grid gap-2 md:grid-cols-2">
                  <Box v-for="service in services" :key="service.id" class="flex items-center gap-2">
                    <Checkbox :model-value="employee.serviceIds.includes(service.id)" :binary="true" :disabled="!service.name" @update:model-value="toggleService(index, service.id)" />
                    <Typography variant="body3" class="text-slate-600">
                      {{ service.name || 'Serviço sem nome' }}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Button severity="secondary" outlined class="w-full justify-center border-slate-200! bg-slate-50! text-slate-700!" @click="addEmployee">
          <template #icon>
            <Plus class="h-4 w-4" />
          </template>
          Adicionar funcionário
        </Button>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Card, Checkbox, InputText } from 'primevue';
import { Plus, Trash2, UserRound } from '@lucide/vue';

import { Box, HStack, Typography } from '@/shared/common';

type ServiceItem = {
  id: number;
  name: string;
  duration: number | null;
  price: number | null;
};

type EmployeeItem = {
  id: number;
  name: string;
  serviceIds: number[];
};

defineProps<{
  services: ServiceItem[];
}>();

const createEmployee = (id: number): EmployeeItem => ({
  id,
  name: '',
  serviceIds: [],
});

const employees = ref<EmployeeItem[]>([createEmployee(1)]);
let employeeId = 1;

function addEmployee() {
  employeeId++;
  employees.value.push(createEmployee(employeeId));
}

function removeEmployee(index: number) {
  if (employees.value.length === 1) {
    return;
  }

  employees.value.splice(index, 1);
}

function toggleService(employeeIndex: number, serviceId: number) {
  const employee = employees.value[employeeIndex];
  if (!employee) return;

  const serviceIndex = employee.serviceIds.indexOf(serviceId);

  if (serviceIndex > -1) {
    employee.serviceIds.splice(serviceIndex, 1);
  } else {
    employee.serviceIds.push(serviceId);
  }
}
</script>
