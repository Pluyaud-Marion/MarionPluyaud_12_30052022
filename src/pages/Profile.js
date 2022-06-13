
import { useParams } from 'react-router-dom';
import BarChartRender from '../components/BarChartRender';
import KeyData from '../components/KeyData';
import LineChartRender from '../components/LineChartRender';
import RadarChartRender from '../components/RadarChartRender';
import RadialBarChartRender from '../components/RadialBarChartRender';
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
    const dataPerformances = useApi(url.userPerformances(id))

    return (
        <div className='Profile'>
            <header>
                <h1 className='title'>Bonjour <span className='firstname'>{dataMain?.data?.userInfos?.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <div className='container-graph'>
                <div className='container-graph-recharts'>
                    <BarChartRender dataActivity={dataActivity} />
                    <div className='container-small-graph'>
                        <LineChartRender dataAverageSessions={dataAverageSessions} />
                        <RadarChartRender dataPerformances={dataPerformances?.data?.data} />
                        <RadialBarChartRender todayScore={dataMain?.data?.todayScore} />
                    </div>
                </div>
                {/* <div className='container-keyData'> */}
                <KeyData keyData={dataMain?.data?.keyData} />
                {/* </div> */}

            </div>
            {/* <div className='container-small-graph'>
                <LineChartRender dataAverageSessions={dataAverageSessions} />
                <RadarChartRender dataPerformances={dataPerformances?.data?.data} />
                <RadialBarChartRender todayScore={dataMain?.data?.todayScore} />
            </div> */}


        </div>
    );
};

export default Profile;