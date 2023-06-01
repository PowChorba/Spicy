import { CategoryCounter } from "@/types";
import axios from "axios";

export async function getCategory(){
    try {
        const apiData = await axios.get(`http://localhost:3001/category`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export async function getCategoryId(id: number){
    try {
        const apiData = await axios.get(`http://localhost:3001/category/${id}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}

export async function getVideos(){
    try{
        const apiData = await axios.get('http://localhost:3001/videos')
        return apiData.data
    }catch (error) {
        console.log(error)
    }
}

export async function getVideoId(id: string){
    try {
        const apiData = await axios.get(`http://localhost:3001/videos/${id}`)
        return apiData.data
    } catch (error) {
        console.log(error)        
    }
}

export async function getCategoryVideos(id: number){
    try {
        const apiData = await axios.get(`http://localhost:3001/category/videos/${id}`)
        return apiData.data
    } catch (error) {
        console.log(error)
    }
}