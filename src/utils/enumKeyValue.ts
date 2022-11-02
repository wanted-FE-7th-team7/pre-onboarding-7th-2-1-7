import { FuelType, Segment } from '../models/car';

export const getEnumKey = (enumValue?: string, type?: string) => {
  const enumType = type === 'fuel' ? FuelType : Segment;
  const indexOfS = Object.values(enumType).indexOf(enumValue);
  return Object.keys(enumType)[indexOfS];
};

export const getEnumValue = (enumKey?: string, type?: string) => {
  const enumType = type === 'fuel' ? FuelType : Segment;
  const indexOfS = Object.keys(enumType).indexOf(enumKey || '');
  return Object.values(enumType)[indexOfS];
};
