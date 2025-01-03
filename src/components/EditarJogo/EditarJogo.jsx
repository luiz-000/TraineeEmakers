import React from 'react';

import './EditarJogo.css';

const EditarJogo = () => {
  return (
    <div className='containerEditarJogo'>
        <div className='cardEditarJogo'>
            <h2> Editar Jogo </h2>
            
            <input placeholder='Título do jogo' type="text" />
            <input placeholder='Gênero' type="text" />
            <input id='campoDescricaoEditarJogo' placeholder='Descrição' type="text" />
            
            <div className='campoImgEditarJogo'>
                <input type='file' />
                Inserir Imagem
            </div>

            <button> Modificar </button>
        </div>
    </div>
  )
}

export default EditarJogo
