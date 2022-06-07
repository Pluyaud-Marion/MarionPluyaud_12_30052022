
import ButtonUser from '../components/ButtonUser';
import { userList } from '../utils/const/userList';


const Home = () => {
    return (
        <div className='Home'>
            <ButtonUser userList={userList} />
        </div>
    );
};

export default Home;