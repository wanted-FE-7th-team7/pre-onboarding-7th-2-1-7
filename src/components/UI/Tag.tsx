import styled from 'styled-components';

interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  return <S.Tag>{text}</S.Tag>;
}

const S = {
  Tag: styled.div`
    width: 6.2rem;
    height: 2.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.gray};
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 3.1rem;
    color: black;
    :hover {
      background-color: ${({ theme }) => theme.black};
      color: white;
      cursor: pointer;
    }
  `,
};
