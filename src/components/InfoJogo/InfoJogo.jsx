import React from 'react';

import './InfoJogo.css';

const InfoJogo = () => {
  return (
    <div className='containerInfoJogo'>
        
        <div className='layoutInfoJogo'>
            
            <div className='imagemInfoJogo'>
                <img loading='lazy' src='src\assets\imagens\imagemJogoGod2.png'></img>
            </div>
            <div className='textoInfoJogo'>
                <h2> God of War </h2>
                <p> Com a vingança contra os deuses do Olimpo em um passado distante, Kratos
                    agora vive como um mortal no reino dos deuses e  monstros nórdicos.
                    É nesse mundo duro e implacável que ele deve lutar para sobreviver...
                    e ensinar seu filho a fazer o mesmo.
                </p>
                
                <div className='buttonsInfoJogo'>
                    <button> Adicionar ao Carrinho </button>
                    <button className='buttonReembolsoInfoJogo'> Solicitar Reembolso </button>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default InfoJogo
