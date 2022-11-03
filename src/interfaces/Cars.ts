export interface Cars {
  id: number;
  amount: number;
  attribute: CarAttribute;
  startDate: Date;
  createdAt: Date;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}

export interface CarAttribute {
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  imageUrl: string;
}

export interface Insurance {
  name: string;
  description: string;
}

export interface AdditionalProducts {
  name: string;
  amount: number;
}
