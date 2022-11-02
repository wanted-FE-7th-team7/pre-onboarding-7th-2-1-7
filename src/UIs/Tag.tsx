import styled from 'styled-components';
import { theme } from '../styles/theme';

interface Props {
  placeholder: string;
  isSelected: boolean;
}

interface StyledProps {
  isSelected: boolean;
}

function Tag({ placeholder = '전체', isSelected = false }: Props) {
  return <StyledTag isSelected={isSelected}>{placeholder}</StyledTag>;
}

export default Tag;

export const StyledTag = styled.button<StyledProps>`
  border: none;
  appearance: none;
  display: inline-block;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.black : theme.gray};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#000000')};
  font-size: 1.4rem;
  padding: 0.5rem 1.8rem;
  border-radius: 62px;
`;
