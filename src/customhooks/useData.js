import axios from "axios"
import { useEffect, useState } from "react"

const useData = (url) => {

    const [profileData, setProfileData] = useState([])
    
    useEffect(() => {
        fetchData();
        console.log('Fetching data from json')
    },[])
    
    const fetchData = async () => {
        const response = await axios.get(url)

        setProfileData(response.data)

    }

    var data = profileData


    return {data}
}

export default useData;