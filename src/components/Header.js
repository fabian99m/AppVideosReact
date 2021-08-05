import React from 'react'

import logo from '../assets/logo-platzi-video-BW2.png';
import userlogo from "../assets/user.png"

import './styles/Header.scss'

 const Header = () => {
    return (
    <header className="NavHeader">
        <img className="NavHeader__img" src={logo} alt="logo" />
        <div className="NavHeader__menu">

            <div className="NavHeader__menu--img">
                <img src={userlogo}  alt='user icon' />
                <p>Perfil</p>
            </div>

            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar sesion</a></li>
            </ul>

        </div>
    </header>
    )
}

export default Header;