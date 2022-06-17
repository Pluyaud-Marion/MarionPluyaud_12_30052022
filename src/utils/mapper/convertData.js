import ActivityData from "../classes/ActivityData"
import MainData from "../classes/MainData"
import AverageSessions from "../classes/AverageSessions"
import UserPerformances from "../classes/UserPerformances"

export default function convertData(data, url) {
    function mapper(url) {
        if (url.includes("/activity")) {
            //console.log("test activity");

            return new ActivityData(data?.data?.userId, data?.data?.sessions)
        }
        if (url.includes("/average")) {
            //console.log("test average");
            console.log(new AverageSessions(data.data.userId, data.data.sessions))
            return new AverageSessions(data?.data?.userId, data?.data?.sessions)
        }
        if (url.includes("/performance")) {
            console.log("test performance");
            return new UserPerformances(data.data.userId, data.data.kind, data.data.data)
        }
        // if (url.includes('/user')) {
        //     return new MainData(data.data.id, data.data.userInfos, data.data.todayScore, data.data.keyData)
        // }

    }

    return mapper(url)
}