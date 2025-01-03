import React from 'react';

import { PiShoppingCartSimpleFill } from "react-icons/pi";

import './InfoJogo.css';

const InfoJogo = () => {
  return (
    <div className='containerInfoJogo'>
        
        <div className='layoutInfoJogo'>
            
            <div className='imagemInfoJogo'>

                <p className='porcentagemInfoJogo'> 98% </p>
                <img loading='lazy' src='src\assets\imagens\imagemJogoGod2.png'></img>
                
                <div className='valoresInfoJogo'>
                    <p className='descontoInfoJogo'> -40% </p>
                    <p className='precoInfoJogo'> R$ 119,95 </p>
                </div>
            </div>

            <div className='textoInfoJogo'>
                <h2> God of War </h2>
                <p> Com a vingança contra os deuses do Olimpo em um passado distante, Kratos
                    agora vive como um mortal no reino dos deuses e  monstros nórdicos.
                    É nesse mundo duro e implacável que ele deve lutar para sobreviver...
                    e ensinar seu filho a fazer o mesmo.
                </p>
                
                <div className='buttonsInfoJogo'>
                    <button>
                        Adicionar ao Carrinho <PiShoppingCartSimpleFill className='iconeCartTelaJogo'/>
                    </button>
                    <button className='buttonReembolsoInfoJogo'>
                        Solicitar Reembolso <PiShoppingCartSimpleFill className='iconeCartTelaJogo' />
                    </button>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default InfoJogo
