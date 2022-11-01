import styled from 'styled-components';

interface Props {
  brand: string;
  name: string;
  classType: string;
  fuelType: string;
  amount: number;
  imageSrc: string;
}
export default function CarCard({
  brand,
  name,
  classType,
  fuelType,
  amount,
  imageSrc,
}: Props) {
  return (
    <S.CardWrapper>
      <S.Card>
        <S.Info>
          <S.InfoBold>
            {brand}
            <br />
            {name}
          </S.InfoBold>
          <S.InfoPlain>
            {classType} / {fuelType} <br />월 {amount}원 부터
          </S.InfoPlain>
        </S.Info>
        <S.Img />
      </S.Card>
    </S.CardWrapper>
  );
}

const S = {
  CardWrapper: styled.div`
    width: 39rem;
    height: 12rem;
    border-bottom: 1px solid black;
  `,
  Card: styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  `,

  Info: styled.div`
    display: flex;
    flex-direction: column;
  `,

  InfoBold: styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  `,

  InfoPlain: styled.div`
    font-size: 1.2rem;
  `,

  Img: styled.img`
    width: 15.2rem;
    height: 8rem;
    border: none;
    background-color: ${({ theme }) => theme.gray};
  `,
};
