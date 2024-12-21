import React from 'react'

import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

import "./Registrar.css";


const Registrar = () => {

  return (
    <div className='container'>

      <div className='containerRegistrar'>

        <form className='formGroup'>
          <h1> Registrar </h1>

          <div>
            <input type='text'
              placeholder='Nome de Usuário'
              required>
            </input>

            <input type='email'
              placeholder='E-mail'
              required>
            </input>

            <input
              type='number'
              placeholder='CPF'
              required>
            </input>

            <input
              type='password'
              placeholder='Senha'
              required>
            </input>

            <input
              type='password'
              placeholder='Confirmar Senha'
              required>
            </input>
          </div>

        </form>

        <div className='butonRegistrar'>
            <Link to='/'> <GoArrowRight className='icon'/> </Link>
        </div>

        <div className='FazerLoginLink'>
          <Link to='/'> Fazer Login </Link>
        </div>

      </div>

      <div className='containerImagemFundo'>
        <img src='/src/assets/imagens/image2.png'></img>
      </div>

    </div>
  )
}

export default Registrar
