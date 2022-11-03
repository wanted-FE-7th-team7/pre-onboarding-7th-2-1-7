import styled from 'styled-components';
import { flex } from '../../styles/theme';

interface Props {
  placeholder: string;
  color: 'black' | 'gray' | 'blue';
  onClick?: () => void;
}

interface StyledProps {
  color: string;
}

function Tag({ placeholder = '전체', color = 'black', onClick }: Props) {
  return (
    <StyledTag onClick={onClick} color={color}>
      {placeholder}
    </StyledTag>
  );
}

export default Tag;

export const StyledTag = styled.button<StyledProps>`
  ${flex()}
  height: 2.7rem;
  padding: 0rem 1.8rem;
  margin: 0 0.4rem;
  flex-shrink: 0;

  ${({ color }) => COLOR_TYPE[color]}

  font-size: 1.4rem;
  appearance: none;
  border: none;
  border-radius: 6.2rem;
  cursor: pointer;
`;

const COLOR_TYPE: ColorType = {
  black: `
    background-color: #000000;
    color: #ffffff;
  `,
  blue: `
    background-color: #0094FF;
    color: #ffffff;
  `,
  gray: `
    background-color: #D9D9D9;
    color: #000000;
  `,
};

interface ColorType {
  [index: string]: string;
}
