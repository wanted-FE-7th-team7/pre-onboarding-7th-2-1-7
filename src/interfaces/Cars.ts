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
  segment: string; // ENUMC: 소형, D: 중형, E: 대형, SUV: SUV
  fuelType: string; // ENUMgasoline: 가솔린, ev: 전기, hybrid: 하이브리드
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
