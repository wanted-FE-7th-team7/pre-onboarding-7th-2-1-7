import { CategoryType } from '../models';

const FUEL_GASOLINE = 'gasoline';
const FUEL_HYBRID = 'hybrid';
const FUEL_ELECTRIC = 'ev';
const SEGMENT_SMALL = 'C';
const SEGMENT_MEDIUM = 'D';
const SEGMENT_LARGE = 'E';
const SEGMENT_SUV = 'SUV';

export const ALL = 'ALL';

export const CATEGORY: CategoryType = {
  ALL: '전체',
  C: '소형',
  D: '중형',
  E: '대형',
  SUV: 'SUV',
};

export const FUEL = {
  gasoline: '가솔린',
  hybrid: '하이브리드',
  ev: '전기',
};
