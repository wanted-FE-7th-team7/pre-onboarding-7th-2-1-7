import React from 'react';
import HearderBar from '../components/HeaderBar';
import ListHeader from '../components/ListHeader';
import ListItem from '../components/ListItem';

function DetailPage() {
  return (
    <div>
      <HearderBar />
      <div>
        <img className="car-img" />
      </div>
      <div>
        <div>brand</div>
        <div>name</div>
      </div>
      <ListItem />
      <ListHeader />
    </div>
  );
}
export default DetailPage;
