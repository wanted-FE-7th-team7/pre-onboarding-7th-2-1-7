const FUEL_GASOLINE = 'gasoline';
const FUEL_HYBRID = 'hybrid';
const FUEL_ELECTRIC = 'ev';
const SEGMENT_SMALL = 'C';
const SEGMENT_MEDIUM = 'D';
const SEGMENT_LARGE = 'E';
const SEGMENT_SUV = 'SUV';

export const ALL = 'ALL';

type CategoryType = {
  [index: string]: string;
  ALL: string;
  C: string;
  D: string;
  E: string;
  SUV: string;
};

export const CATEGORY: CategoryType = {
  ALL: '전체',
  C: '소형',
  D: '중형',
  E: '대형',
  SUV: 'SUV',
};
