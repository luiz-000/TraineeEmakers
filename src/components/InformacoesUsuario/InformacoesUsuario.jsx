import React from 'react'

import { Link , useLocation } from 'react-router-dom';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

import './InformacoesUsuario.css'

const InformacoesUsuario = () => {

  const location = useLocation();
  const userEmail = location.state?.userEmail;

  return (
    <div className='containerEsquerdo'>

      <div className='dadosUsuario'>
        <h1> Olá, {userEmail} </h1>
        <p> Seu email é {userEmail} </p>
        <p> Seu CPF é 123.456.789-00 </p>

        <button> Alterar Dados <MdModeEdit className='iconeEditar' /> </button>
        
        <button>
          <Link to='/'> Excluir Conta <RiDeleteBin5Line className='iconeDelete' /> </Link>
        </button>
        
        <button className='buttonAdmin'>
          <Link to='/adm'> Tela do admin </Link>
        </button>
      </div>

    </div>
  )
}

export default InformacoesUsuario
