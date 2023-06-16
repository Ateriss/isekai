import axios from "axios"


export async function getData(url, setData){
    try{
        const response = await axios.get(`https://fakestoreapi.com/${url}`) 
        setData(response.data)
    }
    catch(error){
        console.log(error)
    }

}

