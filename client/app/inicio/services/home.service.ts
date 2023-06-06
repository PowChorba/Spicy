import axios from "axios";

export async function getVideos() {
    try {
      const apiData = await axios.get("http://localhost:3001/videos");
      return apiData.data;
    } catch (error) {
      console.log(error);
    }
  }

export async function getVideosPage(page:string) {
    try {
      const apiData = await axios.get(`http://localhost:3001/videos/${page}`);
      return apiData.data;
    } catch (error) {
      console.log(error);
    }
  }  

export async function getSearch(){
  try{
    const apiData = await axios.get('http://localhost:3001/search')
    return apiData.data
  }catch(error){
    console.log(error)
  }
}

export async function getPornstart(){
  try {
    const apiData = await axios.get(`http://localhost:3001/inicio/pornstar`)
    return apiData.data
  } catch (error) {
    console.log(error)
  }
}

export async function getInicioVideo(){
  try {
    const apiData = await axios.get(`http://localhost:3001/inicio/videos`)
    return apiData.data
  } catch (error) {
    console.log(error)
  }
}

export async function getCategory(){
  try {
    const apiData = await axios.get(`http://localhost:3001/inicio/category`)
    return apiData.data
  } catch (error) {
    console.log(error)
  }
}