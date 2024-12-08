import React from 'react'

import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

import "./Registrar.css";


const Registrar = () => {

  const navigate = useNavigate();

  function irLogin(){
    navigate('/')
  }

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
            <a href="#"> <GoArrowRight className='icon'/></a>
        </div>

        <div className='FazerLoginLink'>
          <a onClick={irLogin} href='#'> Fazer Login </a>
        </div>

      </div>

      <div className='containerImagemFundo'>
        <img src='/src/assets/imagens/image2.png'></img>
      </div>

    </div>
  )
}

export default Registrar
