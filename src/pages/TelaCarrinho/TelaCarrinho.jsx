import React from 'react';

import './TelaCarrinho.css';

import NavBar from '../../components/NavBar/NavBar';
import ItensNoCarrinho from '../../components/ItensNoCarrinho/ItensNoCarrinho';
import MetodoPagamento from '../../components/MetodoPagamento/MetodoPagamento';

const TelaCarrinho = () => {
  return (
    <div className='containerTelaCarrinho'>
      <NavBar />

      <ItensNoCarrinho />

      <MetodoPagamento />
    </div>
  )
}

export default TelaCarrinho
