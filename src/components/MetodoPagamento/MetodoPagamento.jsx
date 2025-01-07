import React from 'react';

import './MetodoPagamento.css';

import { PiShoppingCartSimpleFill } from "react-icons/pi";

const MetodoPagamento = () => {
  return (
    <div className='containerMetodoPagamento'>
        
        <div className='cardMetodoPagamento'>
            <h2> Método de Pagamento </h2>
            
            <div className='itensMetodoPagamento'>

                <div className='itemMetodoPagamento'>
                    <img loading='lazy' src='src/assets/imagens/imagemPix.png' alt='imagem referente ao metodo de pagamento'></img>
                    <p> Pix </p>
                    <input name='formaPagamento' value="pix" type='radio' />
                </div>

                <div className='itemMetodoPagamento'>
                    <hr></hr>
                </div>

                <div className='itemMetodoPagamento'>
                    <input name='termoCondicao' value="aceito" type='radio' />
                    <p className='termosMetodoPagamento'> Eu aceito os termos e condições </p>
                </div>

                <div className='itemMetodoPagamento'>
                    <button> Finalizar Compra <PiShoppingCartSimpleFill className='iconeFinalizarMetodoPagamento'></PiShoppingCartSimpleFill> </button>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default MetodoPagamento
