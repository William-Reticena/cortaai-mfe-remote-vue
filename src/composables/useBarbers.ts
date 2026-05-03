import { computed, type ComputedRef } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';

import { BarbersApi } from '@/api/BarberApi';
import type { CreateOfferServiceRequest, UpdateBarbershopDetailsRequest } from '@/shared/dtos/request';

export const useBarbershopDetails = (id: ComputedRef<number | undefined>) => {
  return useQuery({
    queryKey: computed(() => ['barbershop', id.value]),
    enabled: computed(() => {
      const value = id.value;
      return typeof value === 'number' && Number.isFinite(value) && value > 0;
    }),
    queryFn: () => {
      const value = id.value;
      if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
        throw new Error('Barbershop ID invalido');
      }

      return BarbersApi.getBarbershopDetails(value);
    },
  });
};

export const useCreateOfferService = () => {
  return useMutation({
    mutationKey: ['createOfferService'],
    mutationFn: (request: CreateOfferServiceRequest) => BarbersApi.createOfferService(request),
  });
};

export const useUpdateBarbershopDetails = () => {
  return useMutation({
    mutationKey: ['updateBarbershopDetails'],
    mutationFn: (request: UpdateBarbershopDetailsRequest) => BarbersApi.updateBarbershopDetails(request),
  });
};
