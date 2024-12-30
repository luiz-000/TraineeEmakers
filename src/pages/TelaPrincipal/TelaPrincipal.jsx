import React from 'react';

import './TelaPrincipal.css';

import NavBar from '../../components/navBar/navBar';
import Carrossel from '../../components/Carrossel/Carrossel';
import CarrosselLancamentos from '../../components/CarrosselLancamentos/CarrosselLancamentos';
import CarrinhoCompra from '../../components/CarrinhoCompra/CarrinhoCompra';
import Footer from '../../components/Footer/Footer';

const TelaPrincipal = () => {
  return (
    <div className='containerPagePrincipal'>
        <NavBar />
        <main>
          <Carrossel />
          <CarrosselLancamentos />

          <div className='posicaoCarrinhoCompra'>
            <div className='carrinhoCompraTelaPrincipal'>
              <CarrinhoCompra />
            </div>
          </div>

        </main>
        <Footer />
    </div>
  )
}

export default TelaPrincipal
