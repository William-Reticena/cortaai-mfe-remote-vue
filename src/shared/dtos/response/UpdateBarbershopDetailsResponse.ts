export class UpdateBarbershopDetailsResponse {
  readonly nmBarbershop: string;
  readonly dsAddress: string;
  readonly dsPhone: string;
  readonly hrOpensAt: string;
  readonly hrClosesAt: string;
  readonly inOpen: boolean;

  constructor(data: UpdateBarbershopDetailsResponse) {
    this.nmBarbershop = data.nmBarbershop;
    this.dsAddress = data.dsAddress;
    this.dsPhone = data.dsPhone;
    this.hrOpensAt = data.hrOpensAt;
    this.hrClosesAt = data.hrClosesAt;
    this.inOpen = data.inOpen;
  }
}
