import styled from 'styled-components';

interface Props {
  value: string;
  text: string;
  clicked: boolean;
  onClick: (selectedCategory: string) => void;
}

export default function Tag({ value, text, clicked, onClick }: Props) {
  return (
    <S.Tag onClick={() => onClick(value)} clicked={clicked}>
      {text}
    </S.Tag>
  );
}

const S = {
  Tag: styled.div<{ clicked: boolean }>`
    height: 2.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ clicked, theme }) =>
      clicked ? theme.black : theme.gray};
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 3.1rem;
    color: ${({ clicked }) => (clicked ? 'white' : 'black')};
    flex-shrink: 0;
    padding: 0 18px;
    :hover {
      background-color: ${({ theme }) => theme.black};
      color: white;
      cursor: pointer;
    }
  `,
};
