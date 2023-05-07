import axios from "axios";

const getData = async (searchQuery: string) => {
    try {
      const apiData = await axios.get(
        `http://localhost:3001/videos?title=${searchQuery}`
      );
    //   setState(apiData.data);
      //   return apiData.data;
    } catch (error) {
      console.log("Error fatal");
    }
  };