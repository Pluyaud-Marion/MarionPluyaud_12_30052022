import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorProfile = () => {
    return (
        <div className='ErrorProfile'>
            <h1>⛔️ Pour consulter votre profil, veuillez retourner sur la page d'accueil et sélectionner votre numéro d'utilisateur ⛔️</h1>
            <NavLink to={"/"} className='link'>Retour page d'accueil</NavLink>

        </div>
    );
};

export default ErrorProfile;