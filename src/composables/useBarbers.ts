import { computed } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { BarbersApi } from '@/api/BarberApi';
import type { CreateOfferServiceRequest, UpdateBarbershopDetailsRequest } from '@/shared/dtos/request';

export const useBarbershopDetails = (id: number | string) => {
  const idNumber = computed(() => Number(id));

  return useQuery({
    queryKey: ['barbershop', idNumber.value],
    enabled: computed(() => !!id && !isNaN(idNumber.value)),
    queryFn: () => BarbersApi.getBarbershopDetails(idNumber.value),
  });
};

export const useCreateOfferService = () => {
  const mutation = useMutation({
    mutationKey: ['createOfferService'],
    mutationFn: (request: CreateOfferServiceRequest) => BarbersApi.createOfferService(request),
  });

  return mutation;
};

export const useUpdateBarbershopDetails = () => {
  const mutation = useMutation({
    mutationKey: ['updateBarbershopDetails'],
    mutationFn: (request: UpdateBarbershopDetailsRequest) => BarbersApi.updateBarbershopDetails(request),
  });

  return mutation;
};
