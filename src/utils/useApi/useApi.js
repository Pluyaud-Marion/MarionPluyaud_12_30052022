import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import convertData from "../mapper/convertData"


export const useApi = (url) => {
    const [data, setData] = useState({})


    useEffect(() => {
        axios.get(url)
            // .then(res => setData(convertData(res.data, url)))
            .then(res => setData(convertData(res.data, url)))
            .catch(error => console.log(error))

    }, [url])

    //console.log(data.data.id);
    // if (data?.data?.id === undefined) {
    //     return <Navigate to="/error" />
    // }
    // } else {
    return data
    // }






}