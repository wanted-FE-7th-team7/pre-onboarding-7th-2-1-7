import styled from 'styled-components';
import { flex, theme, width } from '../styles/theme';

interface Props {
  title: string;
}

function HeaderBar({ title }: Props) {
  return <StyledHeaderBar>{title}</StyledHeaderBar>;
}

export default HeaderBar;

const StyledHeaderBar = styled.div`
  ${flex()}
  border-bottom: 1px solid ${theme.black};
  font-weight: 700;
  font-size: 1.7rem;
  height: 6rem;
  width: ${width.lg};
`;
