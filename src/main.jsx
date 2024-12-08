import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Login from './pages/Login/Login.jsx';
import Registrar from './pages/Registro/Registrar.jsx';
import RecuperarConta from './pages/RecuperarConta/RecuperarConta.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/registrar",
    element: <Registrar/>
  },
  {
    path: "/recuperarConta",
    element: <RecuperarConta/>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
