import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/theme';

interface StyledProps {
  isSelected: boolean;
}
export function Catagory() {
  const [isSelected, SetisSelected] = useState(false);

  return (
    <>
      <Tag
        onClick={() => {
          SetisSelected(prev => !prev);
        }}
        isSelected={isSelected}
      >
        전체
      </Tag>
      <Tag onClick={() => SetisSelected(prev => !prev)} isSelected={isSelected}>
        대형
      </Tag>
      <Tag onClick={() => SetisSelected(prev => !prev)} isSelected={isSelected}>
        중형
      </Tag>
      <Tag onClick={() => SetisSelected(prev => !prev)} isSelected={isSelected}>
        소형
      </Tag>
      <Tag onClick={() => SetisSelected(prev => !prev)} isSelected={isSelected}>
        전기
      </Tag>
    </>
  );
}

const Tag = styled.button<StyledProps>`
  justify-content: center;
  align-items: center;
  width: 6.2rem;
  height: 2.7rem;
  padding: 0.5rem, 1.8rem, 0.5rem, 1.8rem;
  margin: 0.5rem;
  border: none;
  border-radius: 6.2rem;
  background-color: ${({ isSelected }) =>
    isSelected ? colors.black : colors.gray};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#000000')};
  font-size: 1.4rem;
`;
