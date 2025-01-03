import React from 'react';

import './RemoverJogo.css';

const RemoverJogo = () => {
  return (
    <div className='containerRemoverJogo'>
        <div className='cardRemoverJogo'>
            <h2> Remover Jogo </h2>
            
            <input placeholder='Título do jogo ou ID' type="text" />

            <button> Remover </button>
        </div>
    </div>
  )
}

export default RemoverJogo
