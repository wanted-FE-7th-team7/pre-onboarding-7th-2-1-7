import styled from 'styled-components';
import HeaderBar from './HeaderBar';

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <S.Wrapper>
      <S.Layout>
        <HeaderBar />
        {children}
      </S.Layout>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  `,
  Layout: styled.div`
    width: 450px;
  `,
};
