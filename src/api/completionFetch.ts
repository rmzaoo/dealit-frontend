import axios from "axios";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const fetchCompletion = async (input: string) => {
    const body = {
        input
    };
  
    const response = await axios.post(`${baseUrl}/completion`, body);
    return response.data;
  };