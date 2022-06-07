import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className='Navigation-horizontale'>
                <img className='logo' src='../logo.png' alt='logo sportsee' />
                <div className='container-nav'>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/"}>Accueil</NavLink>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/profile"}>Profil</NavLink>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/settings"}>Réglage</NavLink>
                    <NavLink className={(nav) => (nav.isActive ? "nav-active" : "nav")} to={"/community"}>Communauté</NavLink>
                </div>
            </div>
            <div className='Navigation-verticale'>
                <div className='container-icon'>
                    <img className='icon' src="../icon-yoga.png" alt="icone yoga" />
                    <img className='icon' src="../icon-swim.png" alt="icone nageur" />
                    <img className='icon' src="../icon-bike.png" alt="icone cycliste" />
                    <img className='icon' src="../icon-building.png" alt="icone haltère" />
                </div>
                <p className='copiryght'>Copiryght, SportSee 2020</p>
            </div>
        </div>
    );
};

export default Navigation;