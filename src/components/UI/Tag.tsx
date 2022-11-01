// @flow
import React from 'react';

type Props = {
  color: 'primary' | 'secondary' | 'tertiary';
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Tag({ color, label, onClick }: Props) {
  return <button onClick={onClick}>{label}</button>;
}
