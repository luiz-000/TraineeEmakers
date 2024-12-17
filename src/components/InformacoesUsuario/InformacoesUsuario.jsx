import React from 'react'

import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

import './InformacoesUsuario.css'

const InformacoesUsuario = () => {
  return (
    <div className='containerEsquerdo'>

      <div className='dadosUsuario'>
        <h1> Olá, --Nome do Usuário-- </h1>
        <p> Seu email é nomeusuario@email.com </p>
        <p> Seu CPF é 123.456.789-00 </p>

        <button> Alterar Dados <MdModeEdit className='iconeEditar' /> </button>
        <button> Excluir Conta <RiDeleteBin5Line className='iconeDelete' /> </button>
        
        <button className='buttonAdmin'> Tela do admin </button>
      </div>

    </div>
  )
}

export default InformacoesUsuario
