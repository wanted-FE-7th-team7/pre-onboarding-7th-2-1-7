import styled from 'styled-components';

interface Props {
  text: string;
}

export default function Notice({ text }: Props) {
  return <S.Notice>{text}</S.Notice>;
}

const S = {
  Notice: styled.div`
    width: 5.2rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.blue};
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 3.1rem;
    color: black;
  `,
};
