import styled from 'styled-components';
interface Props {
  name: string;
  description: string;
}
export default function ListItem({ name, description }: Props) {
  return (
    <S.Item>
      <S.Bold>{name}</S.Bold>
      <S.Plain>{description}</S.Plain>
    </S.Item>
  );
}

const S = {
  Item: styled.div`
    height: 4.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  `,
  Bold: styled.span`
    font-size: 1.7rem;
    font-weight: 700;
  `,

  Plain: styled.span`
    font-size: 1.7rem;
  `,
};
