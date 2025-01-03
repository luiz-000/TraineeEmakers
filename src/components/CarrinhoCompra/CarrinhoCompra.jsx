import React from 'react';

import { TfiShoppingCart } from "react-icons/tfi";
import { Link } from 'react-router-dom';

import './CarrinhoCompra.css'

const CarrinhoCompra = () => {
  return (
    <div className='carrinhoCompra'>
        <button>
          <Link to='/carrinho'> <TfiShoppingCart className='iconeCarrinhoCompra' /> </Link> 
        </button>
    </div>
  )
}

export default CarrinhoCompra
