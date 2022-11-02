export type FuelType = 'gasoline' | 'hybrid' | 'ev';
export type Segment = 'C' | 'D' | 'E' | 'SUV';

interface AdditionalProduct {
  name: string;
  amount: number;
}

interface Insurance {
  name: string;
  description: string;
}

export interface Car {
  id: number;
  startDate: Date;
  attribute: {
    createAt: Date;
    brand: string;
    name: string;
    segment: string;
    fuelType: FuelType;
    imageUrl: string;
  };
  amount: number;
  insurance: Insurance[];
  additionalProducts: AdditionalProduct[];
}

export interface CategoryType {
  [index: string]: string;
  ALL: string;
  C: string;
  D: string;
  E: string;
  SUV: string;
}
