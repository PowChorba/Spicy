import axios from "axios"

export async function getPornstars(){
    try {
        const apiData = await axios.get('http://localhost:3001/pornstar')
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export async function getActorIndividual(name:string){
    try {
        const apiData = await axios.get(`http://localhost:3001/pornstar/${name}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}