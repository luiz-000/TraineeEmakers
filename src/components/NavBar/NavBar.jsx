import { React , useState } from 'react';

import { LuSearch , LuMenu, LuX } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import './NavBar.css';


const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div>
            <nav className='navBar'>

                <div className="navbarImg">
                    <Link to='/principal'>
                        <img src="/src/assets/imagens/imagem1.png" alt='imagem da logo da empresa'/>
                    </Link>
                </div>

                <ul className={`navbarLinks ${openMenu ? 'open' : ''}`}>
                    <li> <Link to='/principal'> Lançamentos </Link> </li>
                    <li> <Link to='/populares'> Populares </Link> </li>
                    <li> <Link to=''> Gêneros </Link> </li>
                    <li> <Link to='/principal'> Promoções </Link> </li>
                    <li> <Link to='/conta'> Conta </Link> </li>
                </ul>

                <div className="navbarCampoBusca">
                    <input type="text"/>
                    <button> <LuSearch className='iconeBusca'/> </button>
                </div>

                <button className='buttonMenuNavBar' onClick={toggleMenu}>
                    {openMenu ? <LuX className='iconeMenuNavBar' /> : <LuMenu className='iconeMenuNavBar'/>}
                </button>

            </nav>
        </div>
    )
}

export default NavBar
