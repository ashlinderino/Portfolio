import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-6y78.onrender.com/api/",
});
export default api;