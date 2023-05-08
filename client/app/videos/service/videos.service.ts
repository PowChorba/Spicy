import axios from "axios";

export const getData = async (searchQuery: string | null) => {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/videos?title=${searchQuery}`
      );
    //   setState(apiData.data);
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

  export async function getAllVideos() {
    try {
      const apiData = await axios.get(`http://localhost:3001/videos`);
      return apiData.data;
    } catch (error) {
      console.log(error);
    }
  } 
  