import React from 'react';

import "./TelaPopulares.css";

import NavBar from "../../components/NavBar/NavBar";
import JogosPopulares from '../../components/JogosPopulares/JogosPopulares';
import CarrinhoCompra from '../../components/CarrinhoCompra/CarrinhoCompra';
import Footer from "../../components/Footer/Footer";

const TelaPopulares = () => {
  return (
    <div className='containerTelaPopulares'>
        
        <NavBar />
        <JogosPopulares />

        <div className='posicaoCompraTelaPopulares'>
          <div className='carrinhoCompraTelaPopulares'>
            <CarrinhoCompra />
          </div>
        </div>

        <Footer />

    </div>
  )
}

export default TelaPopulares
