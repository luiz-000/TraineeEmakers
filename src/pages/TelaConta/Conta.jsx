import React from 'react';

import './Conta.css';

import NavBar from '../../components/NavBar/NavBar';
import InformacoesUsuario from '../../components/InformacoesUsuario/InformacoesUsuario';
import JogosAdquiridos from '../../components/JogosAdquiridos/JogosAdquiridos';
import CarrinhoCompra from '../../components/CarrinhoCompra/CarrinhoCompra';


const Conta = () => {
  return (
    <div className='containerConta'>
        
        <NavBar />
        <div className='componenteEsquerdo'> <InformacoesUsuario /> </div>
        <div className='componenteDireito'> <JogosAdquiridos /> </div>
        
        <div className='posicaoCarrinhoCompraTelaConta'>
          <div className='carrinhoCompraTelaConta'>
            <CarrinhoCompra />
          </div>
        </div>

    </div>
  )
}

export default Conta
