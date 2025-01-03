import React from 'react';

import './CadastrarJogo.css';

const CadastrarJogo = () => {
  return (
    <div className='containerCadastrarJogo'>
        <div className='cardCadastrarJogo'>
            <h2> Cadastrar Jogo </h2>
            
            <input placeholder='Título do jogo' type="text" />
            <input placeholder='Gênero' type="text" />
            <input id='campoDescricaoCadastrarJogo' placeholder='Descrição' type="text" />
            
            <div className='campoImgCadastrarJogo'>
                <input type='file' />
                Inserir Imagem
            </div>

            <button> Cadastrar </button>
        </div>
    </div>
  )
}

export default CadastrarJogo
