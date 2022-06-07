
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonUser from '../components/ButtonUser';

const Home = () => {
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        axios.get("user_main_data.json")
            .then(res => setDataUser(res.data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='Home'>
            <h1>Page profil globale</h1>
            <ButtonUser dataUser={dataUser} />
        </div>
    );
};

export default Home;