import styled from 'styled-components';
import Tag from './Tag';
import { CATEGORY } from '../../constants';

interface Props {
  selectedCategory: string;
  onClick: (selectedCategory: string) => void;
}

export default function Category({ selectedCategory, onClick }: Props) {
  return (
    <S.Category>
      {Object.entries(CATEGORY).map(([value, text]) => (
        <Tag
          key={value}
          value={value}
          text={text}
          clicked={value === selectedCategory}
          onClick={onClick}
        />
      ))}
    </S.Category>
  );
}

const S = {
  Category: styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow-x: scroll;
    border-bottom: 1px solid black;
  `,
};
