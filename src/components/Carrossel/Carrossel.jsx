import React from 'react';

import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Carrossel.css';


/*function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent"}}
      onClick={onClick}
    >
      <button className='arrow'> <IoIosArrowForward className='icone'/> </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent"}}
      onClick={onClick}
    >
      <button className='arrow'> <IoIosArrowBack className='icone'/> </button>
    </div>
  );
}*/

const Carrossel = () => {

  const slides = [
    {
      imgEsquerda1: 'src/assets/imagens/imagemJogoDays.png',
      imgEsquerda2: 'src/assets/imagens/imagemJogoHorizon.png',
      imgDireita: 'src/assets/imagens/imagemJogoGod2.png',
      precoEsq1: 'R$ 169,90',
      descontoEsq1: '-15%',
      precoEsq2: 'R$ 149,99',
      descontoEsq2: '-25%',
      precoDireita: 'R$ 119,95',
      descontoDireita: '-40%',
    },
    {
      imgEsquerda1: 'src/assets/imagens/imagemJogoMortal.jpg',
      imgEsquerda2: 'src/assets/imagens/imagemJogoSkyrim.jpg',
      imgDireita: 'src/assets/imagens/imagemJogoDeath2.jpg',
      precoEsq1: 'R$ 80,99',
      descontoEsq1: '-50%',
      precoEsq2: 'R$ 110,90',
      descontoEsq2: '-10%',
      precoDireita: 'R$ 140,00',
      descontoDireita: '-20%',
    },
    {
      imgEsquerda1: 'src/assets/imagens/imagemJogoOri.avif',
      imgEsquerda2: 'src/assets/imagens/imagemJogoRedDead.png',
      imgDireita: 'src/assets/imagens/imagemJogoTLU.webp',
      precoEsq1: 'R$ 115,00',
      descontoEsq1: '-30%',
      precoEsq2: 'R$ 55,99',
      descontoEsq2: '-35%',
      precoDireita: 'R$ 90,99',
      descontoDireita: '-45%',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='containerCarrossel'>
      <Slider {...settings}>

        {slides.map((slide, index) => (
          
          <div key={index}>
            <div className='grid'>

              <div className='direito'>
                <img loading='lazy' src={slide.imgDireita}></img>

                <div className='textoDireito'>
                  <p className='desconto'> {slide.descontoDireita} </p>
                  <p className='preco'> {slide.precoDireita} </p>
                </div>
              </div>

              <div className='esquerdo'>
                <img loading='lazy' src={slide.imgEsquerda1}></img>

                <div className='textoEsquerdo'>
                  <p className='desconto'> {slide.descontoEsq1} </p>
                  <p className='preco'> {slide.precoEsq1} </p>
                </div>
              </div>
            
              <div className='esquerdo'>
                <img loading='lazy' src={slide.imgEsquerda2}></img>

                <div className='textoEsquerdo'>
                  <p className='desconto'> {slide.descontoEsq2} </p>
                  <p className='preco'> {slide.precoEsq2} </p>
                </div>
              </div>

            </div>
          </div>

        ))}
        
      </Slider>
    </div>
  )
}

export default Carrossel