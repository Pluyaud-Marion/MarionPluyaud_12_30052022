
import { useParams } from 'react-router-dom';
import BarChartRender from '../components/BarChartRender';
import KeyData from '../components/KeyData';
import LineChartRender from '../components/LineChartRender';
import { urlApi } from '../utils/const/urlApi';
import { urlMock } from '../utils/const/urlMock';
import { useApi } from '../utils/useApi/useApi';


const Profile = () => {
    const { id } = useParams()

    const url = urlMock
    //const url = urlApi
    const dataMain = useApi(url.userMainData(id))

    const dataActivity = useApi(url.userActivity(id))
    const dataAverageSessions = useApi(url.userAverageSessions(id))

    return (
        <div className='Profile'>
            <header>
                <h1 className='title'>Bonjour <span className='firstname'>{dataMain?.data?.userInfos?.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <div className='container-barchart-keyData'>
                <BarChartRender dataActivity={dataActivity} />
                <KeyData keyData={dataMain?.data?.keyData} />

            </div>
            <div className='container-average-graph'>
                <LineChartRender dataAverageSessions={dataAverageSessions} />
            </div>


        </div>
    );
};

export default Profile;