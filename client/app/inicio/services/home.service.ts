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