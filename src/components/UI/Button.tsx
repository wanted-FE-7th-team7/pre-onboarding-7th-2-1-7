// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  color: 'primary' | 'secondary' | 'tertiary';
  size: 'xs' | 'sm' | 'base' | 'md' | 'lg';
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  color = 'primary',
  label = '',
  onClick,
}: Partial<Props>) {
  return (
    <S.Button onClick={onClick} color={color}>
      {label}
    </S.Button>
  );
}

const S = {
  Button: styled.button<Pick<Props, 'color'>>`
    all: unset;
    cursor: pointer;
    background-color: ${({ theme, color }) => theme.bgColor[color]};
    color: ${({ theme, color }) => theme.fontColor[color]};
    min-width: 6.2rem;
    height: 2.7rem;
    padding: 0.5rem 1.8rem 0.5rem 1.8rem;
    border-radius: 6.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.4rem;
  `,
};
