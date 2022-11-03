import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { ListItemRequest } from '../../apis/api';

export function ListItem() {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);

  const getList = () => ListItemRequest(setListData);

  const goToDetail = (navigate: any, url: any) => {
    navigate(url);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {listData.map((list: any) => (
        <ListItemWrap
          onClick={() => goToDetail(navigate, `/detail/${list.id}`)}
          key={list.id}
        >
          <ListTextWrap>
            <p className="Name">{list.attribute.brand}</p>
            <p className="CarName">{list.attribute.name}</p>
            <p className="type">
              {list.attribute.segment} / {list.attribute.fuelType}
            </p>
            <p className="price">월 {list.amount.toLocaleString()} 원 부터</p>
          </ListTextWrap>
          <ImgWrap>
            <img
              className="CarImg"
              alt="carImg"
              src={list.attribute.imageUrl}
            />
          </ImgWrap>
        </ListItemWrap>
      ))}
    </div>
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
  margin: 0 7rem 0 1rem;
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
  margin: 0 1rem 0 7rem;
  width: 15.2rem;
  height: 8rem;
  border: 1px solid black;
  .CarImg {
    width: 100%;
  }
`;
