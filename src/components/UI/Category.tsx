import styled from 'styled-components';
import Tag from './Tag';

interface Props {
  category: string[];
}

export default function Category({ category }: Props) {
  return (
    <S.Category>
      {category.map(name => (
        <Tag text={name} />
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

    border-bottom: 1px solid black;
  `,
};
