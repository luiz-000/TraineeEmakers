import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './CarrosselLancamentos.css';

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
        slidesToScroll: 1
    };

    return (
        <div className='containerCarrosselLancamentos'>
            <div className='items'>
                <h1> Lançamentos </h1>

                <Slider {...settings}>
                    {slides.map((image, index) => (
                        <div key={index} className='fundo'>
                            
                            <div className='images'>
                                <img src={image}></img>
                            </div>
                            
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default CarrosselLancamentos
