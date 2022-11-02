// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Car } from '../../apis/cars';
import { Tag } from './Tag';

export type CarsFilter = (cars: Car[]) => Car[];
interface TagInfo {
  name: '전체' | '대형' | '중형' | '소형' | '전기';
  carsFilter: CarsFilter;
}

export const tagsInfo: TagInfo[] = [
  { name: '전체', carsFilter: (cars: Car[]) => cars },
  {
    name: '대형',
    carsFilter: (cars: Car[]) =>
      cars.filter(car => car.attribute.segment === 'E'),
  },
  {
    name: '중형',
    carsFilter: (cars: Car[]) =>
      cars.filter(car => car.attribute.segment === 'D'),
  },
  {
    name: '소형',
    carsFilter: (cars: Car[]) =>
      cars.filter(car => car.attribute.segment === 'C'),
  },
  {
    name: '전기',
    carsFilter: (cars: Car[]) =>
      cars.filter(car => car.attribute.fuelType === 'ev'),
  },
];

interface Props {
  setCarsFilter: React.Dispatch<React.SetStateAction<{ filter: CarsFilter }>>;
}
export function Category({ setCarsFilter }: Props) {
  const [selectedTag, setSelectedTag] = React.useState(0);

  return (
    <S.TagList>
      {tagsInfo.map((tagInfo, index) => (
        <Tag
          key={tagInfo.name}
          label={tagInfo.name}
          isActive={index === selectedTag}
          onClick={() => {
            setSelectedTag(index);
            setCarsFilter({ filter: tagInfo.carsFilter });
          }}
        />
      ))}
    </S.TagList>
  );
}

const S = {
  TagList: styled.ul`
    & {
      display: flex;
      gap: 0.8rem;
    }
  `,
};
