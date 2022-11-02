import { PropsWithChildren } from 'react';
import styled from 'styled-components';

function Category({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

export default Category;

const Wrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 0.6rem;
`;
