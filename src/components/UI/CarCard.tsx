import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
  createAt: string;
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  amount: number;
  imageSrc: string;
}
export default function CarCard({
  id,
  createAt,
  brand,
  name,
  segment,
  fuelType,
  amount,
  imageSrc,
}: Props) {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/${id}`);
  };

  console.log(createAt);

  return (
    <S.CardWrapper onClick={() => handleClick(id)}>
      <S.Notice>신규</S.Notice>
      <S.Card>
        <S.Info>
          <S.InfoBold>
            {brand}
            <br />
            {name}
          </S.InfoBold>
          <S.InfoPlain>
            {segment} / {fuelType} <br />월 {amount}원 부터
          </S.InfoPlain>
        </S.Info>
        <S.Img src={imageSrc} alt="image" />
      </S.Card>
    </S.CardWrapper>
  );
}

const S = {
  CardWrapper: styled.div`
    width: 100%;
    height: 12rem;
    border-bottom: 1px solid black;
    position: relative;
    :hover {
      cursor: pointer;
    }
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

  Notice: styled.div`
    width: 5.2rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    background-color: ${({ theme }) => theme.blue};
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 3.1rem;
    color: white;
  `,
};
