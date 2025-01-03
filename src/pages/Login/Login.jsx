import { React , useState } from 'react';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

import './Login.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/conta', { state: { userEmail: email } });
  }

  return (
    <div className='container'>

      <div className='containerFormulario'>

        <form className='formGroup' onSubmit={handleSubmit}>
          <h1> Login </h1>

          <div>
            <input type='email'
              placeholder='E-mail'
              required
              onChange={(event) => setEmail(event.target.value)}>
            </input>

            <input type='password'
              placeholder='Senha'
              required
              onChange={(event) => setPassword(event.target.value)}>
            </input>
          </div>

          <button type='submit' className='butonLogin'>
            <GoArrowRight className='iconLogin'/>
          </button>
        </form>

        <div className='criarContaLink'>
          <Link to='/registrar'> Criar Conta </Link>
          <Link to='/recuperarConta'> Esqueceu a senha? </Link>
        </div>

      </div>

      <div className='containerImagemFundo'>
        <img src='/src/assets/imagens/image2.png'></img>
      </div>

    </div>
  )
}

export default Login
