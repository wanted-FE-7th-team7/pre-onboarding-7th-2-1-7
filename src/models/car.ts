export enum Segment {
  C = '소형',
  D = '중형',
  E = '대형',
  SUV = 'SUV',
}

export enum FuelType {
  gasoline = '가솔린',
  hybrid = '하이브리드',
  ev = '전기',
}

export interface Attribute {
  brand: string;
  name: string;
  segment: Segment;
  fuelType: FuelType;
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

export interface CarResponse {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}
