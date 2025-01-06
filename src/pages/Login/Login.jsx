import  React from 'react';

import { Link , useNavigate } from 'react-router-dom';
import Formulários from '../../components/Formulários/Formulários';

import './Login.css';


const Login = () => {
  
  const navigate = useNavigate();

  const loginCampos = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'E-mail',
      required: true
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Senha',
      required: true
    }
  ];

  const loginLinks = [
    {
      component: Link,
      to: '/registrar',
      text: 'Criar Conta'
    },
    {
      component: Link,
      to: '/recuperarConta',
      text: 'Esqueceu a senha?'
    }
  ];

  const handleSubmit = (dadosFormulario) => {
    navigate('/conta', { state: { userEmail: dadosFormulario.email } });
  };

  return (
    <div className='containerLogin'>
      <section className='containerInternoLogin'>
        
        <Formulários
          titulo='Login'
          campos={loginCampos}
          onSubmit={handleSubmit}
          links={loginLinks}
        />

        <div className='imagemFundoLogin'>
          <img loading='lazy' src="/src/assets/imagens/image2.png" alt="Imagem de fundo" />
        </div>

      </section>
    </div>
  );
}

export default Login
