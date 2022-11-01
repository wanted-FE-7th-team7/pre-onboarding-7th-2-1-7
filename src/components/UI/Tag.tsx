// @flow
import React from 'react';
import styled from 'styled-components';
import { color, fontColor } from '../../styles/theme';

type Props = {
  color: 'primary' | 'secondary';
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Tag({
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
    background-color: ${props => color[props.color]};
    color: ${props => fontColor[props.color]};
    width: 62px;
    height: 27px;
    padding: 5px, 18px, 5px, 18px;
    border-radius: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
  `,
};
