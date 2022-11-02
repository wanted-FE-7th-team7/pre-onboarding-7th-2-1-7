import React, { useState } from 'react';
import Category from '../components/UI/Category';
import ListItem from '../components/UI/ListItem';
import useCarList from '../hooks/useCarList';
import styled from 'styled-components';

function ListPage() {
  const [selectedMenu, setSelectedMenu] = useState('');
  const carList = useCarList(undefined, selectedMenu);

  const selectedCategory = (menu: string) => {
    setSelectedMenu(menu);
  };

  console.log('carList', carList);

  return (
    <div>
      <Category selectedCategory={selectedCategory} />
      {carList.length === 0 && <S.HelpText>차량이 없습니다.</S.HelpText>}
      {carList && carList.map((e, i) => <ListItem item={e} key={i} />)}
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
