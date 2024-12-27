import React from 'react'

import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
  return (
    <footer className='containerFooter'>
      
      <div className='itemsFooter'>
        
        <div className="logo">
          <img src="src\assets\imagens\imagem1.png"/>
        </div>

        <div className='coluna1'>
          <h3> Game Dame </h3>
          <p> Seu próximo jogo começa aqui </p>
        </div>


        <div className="coluna2">
          <h4> Explorar </h4>
          <ul>
            <li> <Link to='/principal'> Inicio </Link> </li>
            <li> <Link to=''> Populares </Link> </li>
            <li> <Link to='/conta'> Conta </Link> </li>
          </ul>
        </div>
        
        <div className="coluna3">
          <h4> Contato </h4>
          <ul>
            <li> gamegamedame@teste.com </li>
            <li> (99) 9 9999-9999 </li>
            <li> Shopping X, Lavras - MG  </li>
          </ul>
        </div>

      </div>

    </footer>
  )
}

export default Footer
