import { BarbershopDetailsResponse } from '@/shared/dtos/response';
import api from './client';
import { CreateOfferServiceRequest } from '@/shared/dtos/request';

export class BarbersApi {
  static async getBarbershopDetails(id: number) {
    const response = await api.get<BarbershopDetailsResponse>(`/barbershops/${id}`);

    return new BarbershopDetailsResponse(response.data);
  }

  static async createOfferService(request: CreateOfferServiceRequest) {
    const response = await api.post('/offers', request, { headers: { Authorization: 1 } });
    return response.data;
  }
}
