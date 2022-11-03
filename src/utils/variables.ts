export const SEGMENT: Segment = {
  C: '소형',
  D: '중형',
  E: '대형',
  SUV: 'SUV',
};

export interface Segment {
  [index: string]: string;
}

export const FUEL_TYPE: FuelType = {
  gasoline: '가솔린',
  ev: '전기',
  hybrid: '하이브리드',
};

export interface FuelType {
  [index: string]: string;
}
