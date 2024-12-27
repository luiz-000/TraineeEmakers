import React from 'react';

import './TelaPrincipal.css';

import NavBar from '../../components/navBar/navBar';
import Carrossel from '../../components/Carrossel/Carrossel';
import CarrosselLancamentos from '../../components/CarrosselLancamentos/CarrosselLancamentos';
import Footer from '../../components/Footer/Footer';

const TelaPrincipal = () => {
  return (
    <div className='containerPage'>
        <NavBar />
        <main>
          <Carrossel />
          <CarrosselLancamentos />
        </main>
        <Footer />
    </div>
  )
}

export default TelaPrincipal
