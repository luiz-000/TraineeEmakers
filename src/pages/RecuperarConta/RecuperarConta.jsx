import React from 'react';

import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

import "./RecuperarConta.css";


const RecuperarConta = () => {

    return (
        <div className='container'>

            <div className='containerRecuperarConta'>

                <form className='formGroup'>

                    <h1> Recuperar </h1>
                    <h1> Conta </h1>

                    <div>
                        <input
                            type='email'
                            placeholder='E-mail'
                            required>
                        </input>
                    </div>

                </form>

                <div className='butonRecuperar'>
                    <Link to='/'> <GoArrowRight className='icon'/> </Link>
                </div>

                <div className='links'>
                    <Link to='/registrar'> Criar Conta </Link>
                    <Link to='/'> Fazer Login </Link>
                </div>

            </div>

            <div className='containerImagemFundo'>
                <img src='/src/assets/imagens/image2.png'></img>
            </div>

        </div>
    )
}

export default RecuperarConta
