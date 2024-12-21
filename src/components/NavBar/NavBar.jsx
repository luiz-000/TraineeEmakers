import React from 'react';

import { LuSearch } from "react-icons/lu";
import { Link } from 'react-router-dom';

import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav className='navBar'>

                <div className="navbarImg">
                    <img src="/src/assets/imagens/imagem1.png"/>
                </div>

                <ul className="navbarLinks">
                    <li><a href="#"> Lançamentos </a></li>
                    <li><a href="#"> Populares </a></li>
                    <li><a href="#"> Gêneros </a></li>
                    <li><a href="#"> Promoções </a></li>
                    <li> <Link to='/conta'> Conta </Link> </li>
                </ul>

                <div className="navbarCampoBusca">
                    <input type="text"/>
                    <button> <LuSearch className='iconeBusca'/> </button>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
