import React from 'react';
import styled from 'styled-components';

interface Props {
  tagName: string;
  type?: 'category' | 'item';
  color?: '--primary-blue' | '--primary-grey' | '--black';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Tag({ tagName, type, color, onClick }: Props) {
  return (
    <S.Tag color={color} onClick={onClick}>
      {tagName}
    </S.Tag>
  );
}

const getFontColor = (color?: string): string =>
  `var(${color === '--black' ? '--white' : '--black'})`;

const getBgColor = (color?: string): string =>
  `var(${color || '--primary-grey'})`;

const S = {
  Tag: styled.button`
    & {
      background-color: ${({ color }) => getBgColor(color)};
      color: ${({ color }) => getFontColor(color)};
      border-radius: var(--border-radius);
      width: 3rem;
      height: 1.4rem;
      text-align: center;
      font-size: var(--font-small);
      cursor: pointer;
      border: 0;
    }
  `,
};

export default Tag;
