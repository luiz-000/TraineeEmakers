import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import './CarrosselLancamentos.css';


const SampleNextArrowCarrosselLancamento = ({ onClick }) => (
  <button onClick={onClick} className='iconeAvancarSlideCarrosselLancamento'>
    <SlArrowRight />
  </button>
);

const SamplePrevArrowCarrosselLancamento = ({ onClick }) => (
  <button onClick={onClick} className='iconeVoltarSlideCarrosselLancamento'>
    < SlArrowLeft />
  </button>
);


const CarrosselLancamentos = () => {
    const slides = [
        'src/assets/imagens/imagemJogoBob.png',
        'src/assets/imagens/imagemJogoDeliver.png',
        'src/assets/imagens/imagemJogoSpell.png',
        'src/assets/imagens/imagemJogoDeath.png',
        'src/assets/imagens/imagemJogoPerish.png',
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrowCarrosselLancamento />,
        prevArrow: <SamplePrevArrowCarrosselLancamento />
    };

    return (
        <div className='containerCarrosselLancamentos'>
            <div className='items'>
                <h1> Lançamentos </h1>

                <Slider {...settings}>
                    {slides.map((image, index) => (
                        <div key={index} className='fundo'>
                            
                            <div className='images'>
                                <img loading='lazy' src={image} alt='imagem de um jogo no carrossel lançamentos'></img>
                                
                                <div className='precoJogoLancamento'>
                                    <p> R$ 299,00 </p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default CarrosselLancamentos
