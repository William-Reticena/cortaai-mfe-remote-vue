import api from './client';

import { BarbershopDetailsResponse, UpdateBarbershopDetailsResponse } from '@/shared/dtos/response';
import { CreateOfferServiceRequest, UpdateBarbershopDetailsRequest } from '@/shared/dtos/request';

export class BarbersApi {
  static async getBarbershopDetails(id: number) {
    const response = await api.get<BarbershopDetailsResponse>(`/barbershops/${id}`);

    return new BarbershopDetailsResponse(response.data);
  }

  static async createOfferService(request: CreateOfferServiceRequest) {
    const response = await api.post('/offers', request, { headers: { Authorization: 1 } });
    return response.data;
  }

  static async updateBarbershopDetails(request: UpdateBarbershopDetailsRequest) {
    const response = await api.put<UpdateBarbershopDetailsResponse>('/barbershops', request, { headers: { Authorization: 1 } });

    return new UpdateBarbershopDetailsResponse(response.data);
  }
}
