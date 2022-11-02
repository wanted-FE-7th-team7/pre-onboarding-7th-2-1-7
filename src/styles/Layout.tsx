import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { flex } from './theme';

function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <StyledLayout>{children}</StyledLayout>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLayout = styled.div`
  ${flex('center', '', 'column')}
  width: 45rem;
  @media screen and (max-width: 360px) {
    width: 35rem;
  }
`;
