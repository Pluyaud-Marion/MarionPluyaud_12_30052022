
import ButtonUser from '../components/ButtonUser';
import { userList } from '../utils/const/userList';


const Home = () => {
    return (
        <div className='Home'>
            <div className='text'>Veuillez sélectionner votre numéro d'utilisateur : </div>
            <ButtonUser userList={userList} />
        </div>
    );
};

export default Home;