import styled from 'styled-components';
interface Props {
  name: string;
  description: string;
}
export default function ListItem({ name, description }: Props) {
  return (
    <S.Item>
      <S.Text>{name}</S.Text>
      <S.Text>{description}</S.Text>
    </S.Item>
  );
}

const S = {
  Item: styled.div`
    width: 100%;
    height: 4.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    padding-left: 2rem;
  `,
  Text: styled.span`
    font-size: 1.7rem;
    font-weight: 700;
  `,
};
