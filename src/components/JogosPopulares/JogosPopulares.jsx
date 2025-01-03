import React from 'react';

import { Link } from 'react-router-dom';

import './JogosPopulares.css';

const JogosPopulares = () => {
  return (
    <div className='containerJogosPopulares'>
        <h2> Populares </h2>

        <div className='layoutPopulares'>

            <div className='imagemJogosPopulares'>
                <p className='indiceJogoPopular'> 1º </p>
                <img loading='lazy' src='src/assets/imagens/imagemJogoGod2.png' ></img>
            </div>

            <div className='infosJogos'>
                <h3> <Link to='/jogo'> God of War </Link> </h3>
                <p> Kratos é pai novamente. Como mentor e protetor de Atreus,
                    um filho determinado a ganhar seu respeito, ele é forçado a encarar e
                    controlar a fúria que há muito tempo o define enquanto viaja por um mundo
                    ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado,
                    Kratos agora vive no reino das divindades e monstros nórdicos.
                    É nesse mundo duro e impiedoso que ele deve lutar para sobreviver enquanto
                    ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis
                    do Fantasma de Esparta.
                </p>
            </div>
        </div>

        <div className='layoutPopulares'>

            <div className='infosJogos'>
                <h3> Horizon Zero Dawn </h3>
                <p> Em um futuro distante, dominado por máquinas colossais que vagam pela Terra,
                    a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de
                    sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy,
                    uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade
                    sobre suas origens e o misterioso mundo que ela precisa salvar.
                </p>
            </div>

            <div className='imagemJogosPopulares'>
                <p className='indiceJogoPopular'> 2º </p>
                <img loading='lazy' src='src/assets/imagens/imagemJogoHorizon.png'></img>
            </div>
        </div>

        <div className='layoutPopulares'>

            <div className='imagemJogosPopulares'>
                <p className='indiceJogoPopular'> 3º </p>
                <img loading='lazy' src='src/assets/imagens/imagemJogoDays.png'></img>
            </div>

            <div className='infosJogos'>
                <h3> Days Gone </h3>
                <p> Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um
                    ambiente adverso dois anos após uma pandemia mundial devastadora. Entre
                    na pele do antigo motociclista fora da lei Deacon St. John, um caçador de
                    recompensas que tenta achar uma razão para viver numa terra cercada pela morte.
                    Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e
                    armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente...
                    ou de formas mais violentas.
                </p>
            </div>
        </div>

    </div>
  )
}

export default JogosPopulares
