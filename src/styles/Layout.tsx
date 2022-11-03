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
  ${flex()}
  width: 100%;
  height: 100%;
`;

const StyledLayout = styled.div`
  ${flex('center', '', 'column')}
  width: 100%;
  height: 100%;
`;
