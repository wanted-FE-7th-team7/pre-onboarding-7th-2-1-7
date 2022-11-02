// @flow
import * as React from 'react';
import styled from 'styled-components';

interface Prop {
  children: React.ReactElement;
}

export function RootLayout({ children }: Prop) {
  return <S.Layout>{children}</S.Layout>;
}

const S = {
  Layout: styled.div`
    & {
      max-width: 450px;
      min-width: 360px;
      margin: 0 auto;
    }
  `,
};
