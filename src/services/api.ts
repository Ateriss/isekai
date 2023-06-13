import axios from "axios"


export async function getData(url, setData){
    try{
        const response = await axios.get(`https://api.escuelajs.co/api/v1/${url}`) 
        setData(response.data)
    }
    catch(error){
        console.log(error)
    }

}

export async function getCategory(setData) {
    try{
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        setData(response.data)
    }
    catch(error){
        console.log(error)
    }
}