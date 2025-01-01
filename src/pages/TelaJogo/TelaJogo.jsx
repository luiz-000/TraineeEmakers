import React from 'react';

import './TelaJogo.css';

import NavBar from '../../components/NavBar/NavBar';
import InfoJogo from '../../components/InfoJogo/InfoJogo';

const TelaJogo = () => {
  return (
    <div className='containerTelaJogo'>
      <NavBar />
      <InfoJogo />
    </div>
  )
}

export default TelaJogo
