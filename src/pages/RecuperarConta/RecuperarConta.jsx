import React from 'react';

import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

import "./RecuperarConta.css";


const RecuperarConta = () => {

    const navigate = useNavigate();

    function irRegistrar(){
        navigate('/registrar');
    }

    function irFazerLogin(){
        navigate('/');
    }

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
                    <a href="#"> <GoArrowRight className='icon'/></a>
                </div>

                <div className='links'>
                    <a onClick={irRegistrar} href='#'>Criar Conta</a>
                    <a onClick={irFazerLogin} href='#'>Fazer Login</a>
                </div>

            </div>

            <div className='containerImagemFundo'>
                <img src='/src/assets/imagens/image2.png'></img>
            </div>

        </div>
    )
}

export default RecuperarConta
