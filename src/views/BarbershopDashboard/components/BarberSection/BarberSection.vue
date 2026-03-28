<template>
  <Card class="mt-6">
    <template #title>
      <Typography variant="h3" class="mb-6"> Barbeiros </Typography>
    </template>
    <template #content>
      <Box class="flex flex-col gap-4">
        <For :each="barbershopData.barbers" :getKey="(item) => item.id">
          <template #default="{ item: barber }">
            <Card>
              <template #content>
                <HStack align-items="center" justify="between">
                  <HStack align-items="center" gap="4">
                    <Avatar :label="GenericUtils.getFirstLetter(barber.nmBarber)" shape="circle" size="large" style="background-color: #dee9fc; color: #1a2551" />

                    <Box>
                      <Typography> {{ barber.nmBarber }}</Typography>

                      <For :each="groupBarberSpecialties(barber)" :getKey="(service) => service.id">
                        <template #default="{ item: service, index }">
                          <Box as="span"> {{ service.nmService }} </Box>

                          <If :condition="index < groupBarberSpecialties(barber).length - 1">
                            <Box as="span" class="mx-1 text-gray-500"> · </Box>
                          </If>
                        </template>
                      </For>
                    </Box>
                  </HStack>

                  <Box> Disponível </Box>
                </HStack>
              </template>
            </Card>
          </template>
        </For>
      </Box>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { Avatar, Card } from 'primevue';

import { Box, For, HStack, If, Typography } from '@/shared/common';

import type { Barber, OfferService } from '@/shared/dtos/response/BarbershopDetailsResponse';
import { GenericUtils } from '@/utils/GenericUtils';
import type { BarberSectionProps } from './BarberSectionProps';

const { barbershopData } = defineProps<BarberSectionProps>();

const groupBarberSpecialties = (barber: Barber) => {
  if (!barbershopData || !barbershopData.barbers) return [];

  return barber.specialties.reduce((acc, specialty) => {
    const category = barbershopData.offerServices.find((service) => service.nmService === specialty);

    if (category && !acc.some((item) => item.nmService === category.nmService)) {
      acc.push(category);
    }

    return acc;
  }, [] as OfferService[]);
};
</script>
