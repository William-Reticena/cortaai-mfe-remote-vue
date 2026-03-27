import { BarbershopDetailsResponse } from '@/shared/dtos/response';
import api from './client';

export class BarbersApi {
  static async getBarbershopDetails(id: number) {
    const response = await api.get<BarbershopDetailsResponse>(`/barbershops/${id}`);

    return new BarbershopDetailsResponse(response.data);
  }
}
