import styled from 'styled-components';
interface Props {
  text: string;
}
export default function ListHeader({ text }: Props) {
  return <S.Header>{text}</S.Header>;
}

const S = {
  Header: styled.div`
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.blue};
    font-size: 1.7rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    color: white;
  `,
};
