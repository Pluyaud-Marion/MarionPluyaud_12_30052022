
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SwitchButton from '../components/SwitchButton';
import ButtonUser from '../components/ButtonUser';
import { urlApi } from '../utils/const/urlApi';
import { urlMock } from '../utils/const/urlMock';
import { userList } from '../utils/const/userList';
import { useApi } from '../utils/useApi/useApi';


const Home = () => {

    return (
        <div className='Home'>
            <div className='button-user'>
                <div className='text'>🥇 Pour consulter vos performances 🥇, <br />Veuillez sélectionner votre numéro d'utilisateur : </div>
                <ButtonUser userList={userList} />
            </div>
            <div className='button-switch'>
                <SwitchButton />
            </div>
        </div>

    );
};

export default Home;