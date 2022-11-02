import React from 'react';

export const moneyForm = (num: number) => {
  return `${num.toLocaleString('ko-KR')}원`;
};
