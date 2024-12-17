import React from 'react';

import { TfiShoppingCart } from "react-icons/tfi";

import './CarrinhoCompra.css'

const CarrinhoCompra = () => {
  return (
    <div className='carrinhoCompra'>
        <button> <TfiShoppingCart className='iconeCarrinhoCompra' /> </button>
    </div>
  )
}

export default CarrinhoCompra
