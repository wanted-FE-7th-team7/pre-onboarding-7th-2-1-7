import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface Props {
  placeholder: string;
  isSelected: boolean;
  onClick: () => void;
}

interface StyledProps {
  isSelected: boolean;
}

function Tag({ placeholder = '전체', isSelected = false, onClick }: Props) {
  return (
    <StyledTag onClick={onClick} isSelected={isSelected}>
      {placeholder}
    </StyledTag>
  );
}

export default Tag;

export const StyledTag = styled.button<StyledProps>`
  display: inline-block;
  height: 2.7rem;
  padding: 0rem 1.8rem;
  margin: 0 0.4rem;
  flex-shrink: 0;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.black : theme.gray};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#000000')};
  font-size: 1.4rem;
  appearance: none;
  border: none;
  border-radius: 62px;
  cursor: pointer;
`;
