import React from 'react';

import { Link , useNavigate} from 'react-router-dom';
import Formulários from '../../components/Formulários/Formulários';

import "./RecuperarConta.css";


const RecuperarConta = () => {
    
    const navigate = useNavigate();

    const recuperarCampos = [
        {
            type: 'email',
            name: 'email',
            placeholder: 'E-mail',
            required: true
        }
    ];

    const recuperarLinks = [
        {
            component: Link,
            to: '/registrar',
            text: 'Criar Conta'
        },
        {
            component: Link,
            to: '/',
            text: 'Fazer Login'
        }
    ];

    const handleSubmit = (dadosFormulario) => {
        navigate('/', { state: { userEmail: dadosFormulario.email } });
    };

    return (
        <div className='containerRecuperarConta'>
            <section className='containerInternoRecuperar'>
                
                <Formulários
                titulo={'Recuperar Conta'}
                campos={recuperarCampos}
                onSubmit={handleSubmit}
                links={recuperarLinks}
                />

                <div className='imagemFundoRecuperarConta'>
                    <img loading='lazy' src="/src/assets/imagens/image2.png" alt="Imagem de fundo" />
                </div>

            </section>
        </div>
    );
}

export default RecuperarConta
