import React from 'react';

import './TelaAdm.css';

import NavBar from '../../components/NavBar/NavBar';
import CadastrarJogo from '../../components/CadastrarJogo/CadastrarJogo';
import RemoverJogo from '../../components/RemoverJogo/RemoverJogo';
import EditarJogo from '../../components/EditarJogo/EditarJogo';

const TelaAdm = () => {
  return (
    <div className='containerContaAdm'>
        <NavBar />
        <CadastrarJogo />
        <RemoverJogo />
        <EditarJogo />
    </div>
  )
}

export default TelaAdm
