import axios from "axios";

const instance = axios.create({
  baseURL: "https://blog-backend-i842.onrender.com", // your deployed backend URL
});

export default instance;
