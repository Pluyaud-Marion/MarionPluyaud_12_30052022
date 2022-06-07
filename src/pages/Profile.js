
import { useParams } from 'react-router-dom';
import BarChartRender from '../components/BarChartRender';
import KeyData from '../components/KeyData';
import { urlApi } from '../utils/const/urlApi';
import { urlMock } from '../utils/const/urlMock';
import { useApi } from '../utils/useApi/useApi';


const Profile = () => {
    const { id } = useParams()
    //const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get("../user_main_data.json")
    //         .then(res => {
    //             setData(res.data.find(dataUser => dataUser.id === Number(id)));
    //         })
    // }, [id])

    const url = urlMock

    const dataMain = useApi(url.userMainData(id))

    const dataActivity = useApi(url.userActivity(id))

    //console.log(dataActivity);
    return (
        <div className='Profile'>
            <header>
                <h1 className='title'>Bonjour <span className='firstname'>{dataMain?.data?.userInfos?.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <KeyData keyData={dataMain?.data?.keyData} />
            <BarChartRender dataActivity={dataActivity} />
        </div>
    );
};

export default Profile;