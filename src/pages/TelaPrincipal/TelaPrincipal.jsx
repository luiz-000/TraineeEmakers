import React from 'react';

import './TelaPrincipal.css';

import NavBar from '../../components/navBar/navBar';
import Carrossel from '../../components/Carrossel/Carrossel';

const TelaPrincipal = () => {
  return (
    <div className='containerPage'>
        <NavBar />
        <Carrossel />
    </div>
  )
}

export default TelaPrincipal
