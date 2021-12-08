import React, { memo } from 'react';
import H1 from '../../text/H1/H1';
import HPlogo from '../../../assets/harry-potter.png';
import './Title.scss';
const Title = memo(() => {
  return (

<div className="title-section">
      <div className="title-container-section">
      <img src={HPlogo} alt='logo-hp'/>
      <H1>
        Selecciona tu filtro
      </H1>
      </div>
      </div>
  );
});

export default Title;