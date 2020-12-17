import React from 'react';
import { logo } from '../../assets/images';

export const Header = () => {
  return (
    <div>
      <img className='wp-100 h-45 my-25' src={logo} alt='logo' />
    </div>
  );
};
