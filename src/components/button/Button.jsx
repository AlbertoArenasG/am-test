import React, { memo } from 'react';
import './Button.scss'
const Button = memo(({children, onClick}) => {
  return (
    <div className='button-container'>
    <button className='button' onClick={onClick}>
        {children}
    </button>
    </div>
  );
});

export default Button;