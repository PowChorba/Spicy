import axios from "axios";

export async function getVideos() {
    try {
      const apiData = await axios.get("http://localhost:3001/videos");
      return apiData.data;
    } catch (error) {
      console.log(error);
    }
  }