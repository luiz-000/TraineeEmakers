import React from "react";

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login.jsx';
import Registrar from './pages/Registro/Registrar.jsx';
import RecuperarConta from './pages/RecuperarConta/RecuperarConta.jsx';
import Conta from './pages/TelaConta/Conta.jsx';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal.jsx';
import TelaPopulares from "./pages/TelaPopulares/TelaPopulares.jsx";
import TelaJogo from "./pages/TelaJogo/TelaJogo.jsx";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/recuperarConta" element={<RecuperarConta />} />
            <Route path="/conta" element={<Conta />} />
            <Route path="/principal" element={<TelaPrincipal />} />
            <Route path="/populares" element={<TelaPopulares />} />
            <Route path="/jogo" element={<TelaJogo />} />
        </Routes>
    </Router>
  );
}

export default App;
