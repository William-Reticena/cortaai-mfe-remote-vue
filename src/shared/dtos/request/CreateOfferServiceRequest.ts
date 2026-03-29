export class CreateOfferServiceRequest {
  readonly nmService: string;
  readonly dsService?: string;
  readonly vlPrice: number;
  readonly nrDurationMinutes: number;

  constructor(data: CreateOfferServiceRequest) {
    this.nmService = data.nmService;
    this.dsService = data.dsService;
    this.vlPrice = data.vlPrice;
    this.nrDurationMinutes = data.nrDurationMinutes;
  }
}
