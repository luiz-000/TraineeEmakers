import { React , useState , useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom';

import './Carrossel.css';


const SampleNextArrowCarrossel = ({ onClick }) => (
  <button onClick={onClick} className='iconeAvancarSlideCarrossel'>
    <SlArrowRight />
  </button>
);

const SamplePrevArrowCarrossel = ({ onClick }) => (
  <button onClick={onClick} className='iconeVoltarSlideCarrossel'>
    < SlArrowLeft />
  </button>
);


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
      imgEsquerda2: 'src/assets/imagens/imagemJogoFifa.webp',
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
      imgEsquerda2: 'src/assets/imagens/imagemJogoMine.jpg',
      imgDireita: 'src/assets/imagens/imagemJogoTLU.webp',
      precoEsq1: 'R$ 115,00',
      descontoEsq1: '-30%',
      precoEsq2: 'R$ 55,99',
      descontoEsq2: '-35%',
      precoDireita: 'R$ 90,99',
      descontoDireita: '-45%',
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleRezise = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleRezise);
    return () => window.removeEventListener('resize', handleRezise);
  }, []);

  const getSlides = () => {
    if(windowWidth <= 912) {
      return slides.flatMap(slide => [
        {img: slide.imgDireita , preco: slide.precoDireita , desconto: slide.descontoDireita},
        {img: slide.imgEsquerda1 , preco: slide.precoEsq1 , desconto: slide.descontoEsq1},
        {img: slide.imgEsquerda2 , preco: slide.precoEsq2 , desconto: slide.descontoEsq2}
      ]);
    }
    return slides;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ],

    nextArrow: <SampleNextArrowCarrossel />,
    prevArrow: <SamplePrevArrowCarrossel />
  };

  return (
    <div className='containerCarrossel'>
      <Slider {...settings}>

        {windowWidth <= 912 ? (
          getSlides().map((slide, index) => (

            <div key={index}>
              <div className='grid'>

                <div className='jogosCarrosselResponsivo'>
                  <img loading='lazy' src={slide.img} alt="imagem de um jogo no carrosel principal"></img>

                  <div className='textoJogosCarrosselResponsivo'>
                    <p className='desconto'> {slide.desconto} </p>
                    <p className='preco'> {slide.preco} </p>
                  </div>

                </div>
              </div>
            </div>
          ))
        
        ) : (

          slides.map((slide, index) => (
            
            <div key={index}>
              <div className='grid'>

                <div className='direito'>
                  <Link to = {slide.imgDireita === 'src/assets/imagens/imagemJogoGod2.png' ? '/jogo' : '#'} >
                    <img loading='lazy' src={slide.imgDireita} alt='imagem de um jogo no carrosel principal'></img>
                  </Link>

                  <div className='textoDireito'>
                    <p className='desconto'> {slide.descontoDireita} </p>
                    <p className='preco'> {slide.precoDireita} </p>
                  </div>
                </div>

                <div className='esquerdo'>
                  <img loading='lazy' src={slide.imgEsquerda1} alt='imagem de um jogo no carrosel principal'></img>

                  <div className='textoEsquerdo'>
                    <p className='desconto'> {slide.descontoEsq1} </p>
                    <p className='preco'> {slide.precoEsq1} </p>
                  </div>
                </div>
              
                <div className='esquerdo'>
                  <img loading='lazy' src={slide.imgEsquerda2} alt='imagem de um jogo no carrosel principal'></img>

                  <div className='textoEsquerdo'>
                    <p className='desconto'> {slide.descontoEsq2} </p>
                    <p className='preco'> {slide.precoEsq2} </p>
                  </div>
                </div>

              </div>
            </div>

          ))
        )}
        
      </Slider>
    </div>
  )
}

export default Carrossel
