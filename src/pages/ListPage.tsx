import React, { useState } from 'react';
import Category from '../components/UI/Category';
import ListItem from '../components/UI/ListItem';
import useCarList from '../hooks/useCarList';
import styled from 'styled-components';
import { CarResponse } from '../models/car';

function ListPage() {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [carList, loading, isEmpty] = useCarList(undefined, selectedMenu);

  const selectedCategory = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <Category selectedCategory={selectedCategory} />
      {loading && <S.HelpText>불러오는 중</S.HelpText>}
      {isEmpty && <S.HelpText>차량이 없습니다.</S.HelpText>}
      {!isEmpty && carList.map((e, i) => <ListItem item={e} key={i} />)}
    </div>
  );
}

const S = {
  HelpText: styled.p`
    & {
      width: 100%;
      text-align: center;
      padding: 1rem;
    }
  `,
};

export default ListPage;
