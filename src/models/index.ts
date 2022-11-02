export type FuelType = 'gasoline' | 'hybrid' | 'ev';
export type Segment = 'C' | 'D' | 'E' | 'SUV';

export interface Car {
  id: number;
  startDate: string;
  attribute: {
    createAt: string;
    brand: string;
    name: string;
    segment: string;
    fuelType: FuelType;
    imageUrl: string;
  };
  amount: number;
  insurance: {
    name: string;
    description: string;
  }[];
  additionalProducts: {
    name: string;
    amount: number;
  }[];
}
