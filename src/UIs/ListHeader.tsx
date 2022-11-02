import styled from 'styled-components';
import { flex, theme, width } from '../styles/theme';

interface Props {
  title: string;
}

function ListHeader({ title }: Props) {
  return (
    <StyledListHeader>
      <span>{title}</span>
    </StyledListHeader>
  );
}

export default ListHeader;

export const StyledListHeader = styled.div`
  ${flex('left')}
  height: 4.8rem;
  padding: 1.3rem 2rem;
  background-color: ${theme.blue};
  color: #ffffff;
  font-weight: 700;
  font-size: 1.7rem;
  width: ${width.lg};
  span {
    text-align: left;
  }
`;
