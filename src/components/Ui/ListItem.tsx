import styled from 'styled-components';

export function ListItem() {
  return (
    <ListItemWrap>
      <ListTextWrap>
        <p className="Name">brand</p>
        <p className="CarName">name</p>
        <p className="type">중형 / 전기</p>
        <p className="price">월 {} 원 부터</p>
      </ListTextWrap>
      <ImgWrap>
        <img />
      </ImgWrap>
      ;
    </ListItemWrap>
  );
}

const ListItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  border-bottom: 1px solid black;
`;
const ListTextWrap = styled.div`
  margin-right: 7rem;
  .Name {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
  .CarName {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin-bottom: 1rem;
  }
  .type {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  .price {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const ImgWrap = styled.div`
  margin-left: 7rem;
  width: 15.2rem;
  height: 8rem;
  border: 1px solid black;
`;
