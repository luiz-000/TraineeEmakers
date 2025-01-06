import React from 'react'

import { Link , useNavigate } from 'react-router-dom';
import Formulários from '../../components/Formulários/Formulários';

import "./Registrar.css";


const Registrar = () => {

  const navigate = useNavigate();

  const registrarCampos = [
    {
      type: 'text',
      name: 'usuario',
      placeholder: 'Nome de Usuário',
      required: true
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'E-mail',
      required: true
    },
    {
      type: 'number',
      name: 'CPF',
      placeholder: 'CPF',
      required: true
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Senha',
      required: true
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Confirmar Senha',
      required: true
    }
  ];

  const registrarLinks = [
    {
      component: Link,
      to: '/',
      text: 'Fazer Login'
    },
  ];

  const handleSubmit = (dadosFormulario) => {
    navigate('/', { state: { userEmail: dadosFormulario.email } });
  };

  return (
    
    <div className='containerRegistrar'>
      <section className='containerInternoRegistrar'>
        
        <Formulários
          titulo='Registrar'
          campos={registrarCampos}
          onSubmit={handleSubmit}
          links={registrarLinks}
        />

        <div className='imagemFundoRegistrar'>
          <img loading='lazy' src="/src/assets/imagens/image2.png" alt="Imagem de fundo" />
        </div>

      </section>
    </div>
    
  );
}

export default Registrar
