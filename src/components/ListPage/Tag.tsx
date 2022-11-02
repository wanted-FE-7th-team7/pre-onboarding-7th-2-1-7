// @flow
import * as React from 'react';
import { Button } from '../UI/Button';

type Props = {
  label: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Tag({ label, isActive = false, onClick }: Props) {
  return (
    <li>
      <Button
        label={label}
        onClick={onClick}
        color={isActive ? 'primary' : 'secondary'}
      />
    </li>
  );
}
