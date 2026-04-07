export class BarbershopDetailsResponse {
  readonly barbershopDetails: BarbershopDetails;
  readonly offerServices: OfferService[];
  readonly barbers: Barber[];

  constructor(data: BarbershopDetailsResponse) {
    this.barbershopDetails = new BarbershopDetails(data.barbershopDetails);
    this.offerServices = data.offerServices.map((service) => new OfferService(service));
    this.barbers = data.barbers.map((barber) => new Barber(barber));
  }
}

export class BarbershopDetails {
  readonly nmBarbershop: string;
  readonly dsAddress: string;
  readonly dsPhone: string;
  readonly inOpen: boolean;
  readonly hrOpensAt: string;
  readonly hrClosesAt: string;
  readonly dtNextAvailableSchedule: Date;

  constructor(data: BarbershopDetails) {
    this.nmBarbershop = data.nmBarbershop;
    this.dsAddress = data.dsAddress;
    this.dsPhone = data.dsPhone;
    this.inOpen = data.inOpen;
    this.hrOpensAt = data.hrOpensAt;
    this.hrClosesAt = data.hrClosesAt;
    this.dtNextAvailableSchedule = new Date(data.dtNextAvailableSchedule);
  }
}

export class OfferService {
  readonly id: number;
  readonly nmService: string;
  readonly dsService: string;
  readonly vlPrice: number;
  readonly nrDurationMinutes: number;

  constructor(data: OfferService) {
    this.id = data.id;
    this.nmService = data.nmService;
    this.dsService = data.dsService;
    this.vlPrice = data.vlPrice;
    this.nrDurationMinutes = data.nrDurationMinutes;
  }
}

export class Barber {
  readonly id: number;
  readonly nmBarber: string;
  readonly specialties: string[];

  constructor(data: Barber) {
    this.id = data.id;
    this.nmBarber = data.nmBarber;
    this.specialties = data.specialties;
  }
}
