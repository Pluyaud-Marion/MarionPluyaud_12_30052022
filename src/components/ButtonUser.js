import React from 'react';
import { Link } from 'react-router-dom';

const ButtonUser = ({ userList }) => {

    return (
        <div className='ButtonUser'>
            {
                userList.map((user) => (
                    <Link to={"/user/" + user.id} key={user.id}>
                        <button className='button' key={user.id}>Utilisateur {user.id}</button>
                    </Link>
                ))
            }

        </div>
    );
};

export default ButtonUser;