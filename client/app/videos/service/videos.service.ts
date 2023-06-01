import axios from "axios";

export const getData = async (searchQuery: string | undefined) => {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/videos?title=${searchQuery}`
      );
        return apiData.data;
    } catch (error) {
      console.log("Error fatal");
    }
  };

  
export async function getVideo(id: string) {
    try {
      const apiData = await axios.get(`http://localhost:3001/videos/${id}`);
      return apiData.data;
    } catch (error) {
      console.log(error);
    }
  }

  export async function getAllVideos(number:number) {
    try {
      const apiData = await axios.get(`http://localhost:3001/videos/${number}`);
      return apiData.data;
    } catch (error) {
      console.log(error);
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
  