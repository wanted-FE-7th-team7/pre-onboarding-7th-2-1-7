import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { CATEGORY_HEIGHT, flex, HEADER_HEIGHT } from '../../styles/theme';
import Tag from './Tag';

interface Props {
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
}

function Category({ selectedType, setSelectedType }: Props) {
  return (
    <Wrapper>
      {CATEGORIES.map(category => (
        <Tag
          key={category}
          onClick={() => setSelectedType(category)}
          isSelected={selectedType === category}
          placeholder={category}
        />
      ))}
    </Wrapper>
  );
}

export default Category;

const Wrapper = styled.div`
  ${flex('left')}
  position: fixed;
  top: ${HEADER_HEIGHT};
  width: 100%;
  height: ${CATEGORY_HEIGHT};
  padding: 0.6rem;
  background-color: #ffffff;
  border-bottom: 1px solid black;
  overflow-x: scroll;
`;
const CATEGORIES = ['전체', '대형', '중형', '소형', '전기'];
