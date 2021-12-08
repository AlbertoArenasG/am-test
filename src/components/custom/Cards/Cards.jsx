import React, { memo } from 'react';
import './Cards.scss';
import HorizontalCard from '../../HorizontalCard/HorizontalCard';
const Cards = memo(() => {
  return (
    <div className='cards-section'>
      <HorizontalCard/>
      <HorizontalCard/>
      <HorizontalCard/>
      <HorizontalCard/>
    </div>
  );
});

export default Cards;