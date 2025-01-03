import React from 'react';

import './TelaJogo.css';

import NavBar from '../../components/NavBar/NavBar';
import InfoJogo from '../../components/InfoJogo/InfoJogo';
import CarrinhoCompra from '../../components/CarrinhoCompra/CarrinhoCompra';
import Footer from '../../components/Footer/Footer';

const TelaJogo = () => {
  return (
    <div className='containerTelaJogo'>
      <NavBar />
      <InfoJogo />
      
      <div className='posicaoCarrinhoCompraTelaJogo'>
        <div className='CarrinhoCompraTelaJogo'>
          <CarrinhoCompra />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TelaJogo
