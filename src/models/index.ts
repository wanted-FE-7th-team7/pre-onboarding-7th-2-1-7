export type Fuel = 'gasoline' | 'hybrid' | 'ev';
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
    segment: Segment;
    fuelType: Fuel;
    imageUrl: string;
  };
  amount: number;
  insurance: Insurance[];
  additionalProducts: AdditionalProduct[];
}

export interface SegmentText {
  [index: string]: string;
  C: string;
  D: string;
  E: string;
  SUV: string;
}

export interface FuelText {
  [index: string]: string;
  gasoline: string;
  hybrid: string;
  ev: string;
}

export interface CategoryType extends SegmentText {
  ALL: string;
}
