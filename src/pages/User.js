import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BarChartRender from '../components/BarChartRender';
import KeyData from '../components/KeyData';

const Profile = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("../user_main_data.json")
            .then(res => {
                setData(res.data.find(dataUser => dataUser.id === Number(id)));
            })
    }, [id])

    return (
        <div className='Profile'>
            <header>
                <h1 className='title'>Bonjour <span className='firstname'>{data?.userInfos?.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <KeyData keyData={data?.keyData} />
            <BarChartRender id={id} />
        </div>
    );
};

export default Profile;