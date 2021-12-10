import React, { memo } from 'react';
import './Cards.scss';
import HorizontalCard from '../../HorizontalCard/HorizontalCard';
import { useSelector } from "react-redux";


const Cards = memo(() => {
  const students = useSelector((state) => state.hogwarts.students);
  const characters = useSelector((state) => state.hogwarts.characters);


  const renderStudents = characters.map((res,key)=>{
    return <HorizontalCard key={key} characterInfo={res} id={key+1}/>
  })

  return (
    <div className='cards-section'>
     {renderStudents}
    </div>
  );
});

export default Cards;