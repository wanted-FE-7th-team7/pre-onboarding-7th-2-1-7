import React from 'react';
import CarItem from '../components/CarItem';
import Category from '../components/Category';
import HearderBar from '../components/HeaderBar';

const arr = [1, 2, 3, 4, 5];

function ListPage() {
  return (
    <div>
      <HearderBar />
      <Category />
      {arr.map(item => (
        <CarItem key={item} />
      ))}
    </div>
  );
}

export default ListPage;
