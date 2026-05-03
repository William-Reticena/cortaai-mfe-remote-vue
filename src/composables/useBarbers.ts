import { computed, toValue } from 'vue';
import type { MaybeRefOrGetter } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { BarbersApi } from '@/api/BarberApi';
import { useUserDataStore } from '@/stores/userData';
import type { CreateOfferServiceRequest, UpdateBarbershopDetailsRequest } from '@/shared/dtos/request';

export const useBarbershopDetails = (id?: MaybeRefOrGetter<number | string | null | undefined>) => {
  const userDataStore = useUserDataStore();
  const resolvedId = computed(() => toValue(id) ?? userDataStore.barbershopId);
  const idNumber = computed(() => Number(resolvedId.value));

  return useQuery({
    queryKey: computed(() => ['barbershop', idNumber.value]),
    enabled: computed(() => Number.isFinite(idNumber.value) && idNumber.value > 0),
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
