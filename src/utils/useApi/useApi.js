import axios from "axios"
import { useEffect, useState } from "react"
import convertData from "../mapper/convertData"


export const useApi = (url) => {
    const [data, setData] = useState({})


    useEffect(() => {
        axios.get(url)
            .then(res => setData(convertData(res.data, url)))
            .catch(error => console.log(error))

    }, [url])

    return data

}