import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ dataUser }) => {

    return (
        <div>
            {
                dataUser.map((user) => (
                    <Link to={"/user/" + user.id} key={user.id}>
                        <button className='button' key={user.id}>Utilisateur {user.id}</button>
                    </Link>
                ))
            }

        </div>
    );
};

export default User;