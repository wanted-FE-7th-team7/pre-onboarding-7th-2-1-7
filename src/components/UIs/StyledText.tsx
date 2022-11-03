import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/theme';

function StyledText({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

export default StyledText;

const Wrapper = styled.p`
  font-weight: 700;
  font-size: 2.1rem;
  /* height: 100%; */
  width: 100%;
  margin: 36rem 0;
  ${flex('center', 'center')};
`;
