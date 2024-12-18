import React from 'react';

import './Carrossel.css';

const Carrossel = () => {
  return (
    <div className='containerCarrossel'>

      <div className='imagensCarrossel'>

        <div className='smallImages'>
          
          <img src='/src/assets/imagens/imagem2Carrossel.png'></img>
          <div className='item1'>
            <p className='desconto'> -15% </p>
            <p className='preço'> R$ 169,90 </p>
          </div>
          
          <img src='/src/assets/imagens/imagem3Carrossel.png'></img>
          <div className='item2'>
            <p className='desconto'> -25% </p>
            <p className='preço'> R$ 149,99 </p>
          </div>

        </div>

        <div className='largeImages'>

          <img src='/src/assets/imagens/imagem1Carrossel.png'></img>
          <div className='item3'>
            <p className='desconto'> -40% </p>
            <p className='preço'> R$ 119,95 </p>
          </div>
          
        </div>

        <ul className='indicadores'>
          <li className='indicador'></li>
          <li className='indicador'></li>
          <li className='indicador'></li>
          <li className='indicador'></li>
        </ul>
        
      </div>

    </div>
  )
}

export default Carrossel
