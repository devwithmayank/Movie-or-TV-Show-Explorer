import axios from "axios";


const baseApiAxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default baseApiAxiosInstance;