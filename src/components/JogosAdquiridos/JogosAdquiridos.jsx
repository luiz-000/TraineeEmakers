import React from 'react'

import './JogosAdquiridos.css';

const JogosAdquiridos = () => {
  return (
    <div className='containerDireito'>

      <div className='containerJogos'>
        <h1> Jogos adquiridos: </h1>

        <div className='jogosTopo'>

          <div className='jogo'>
            <img src='/src/assets/imagens/imagemJogoBob.png'></img>
            <p> 100/100 </p>
          </div>

          <div className='jogo'>
            <img src='/src/assets/imagens/imagemJogoDeliver.png'></img>
            <p> 95/100 </p>
          </div>

        </div>

        <div className='jogosBase'>

          <div className='jogo'>
            <img src='/src/assets/imagens/imagemJogoGod.png'></img>
            <p> 75/100 </p>
          </div>

          <div className='jogo'>
            <img src='/src/assets/imagens/imagemJogoDeath.png'></img>
            <p> Adicionar Avaliação </p>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default JogosAdquiridos
