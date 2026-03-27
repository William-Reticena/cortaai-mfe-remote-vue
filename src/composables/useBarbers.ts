import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { BarbersApi } from '@/api/BarberApi';

export const useBarbershopDetails = (id: number | string) => {
  const idNumber = computed(() => Number(id));

  return useQuery({
    queryKey: ['barbershop', idNumber.value],
    enabled: computed(() => !!id && !isNaN(idNumber.value)),
    queryFn: () => BarbersApi.getBarbershopDetails(idNumber.value),
  });
};
