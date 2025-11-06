import axios from "axios";

const api = axios.create({
  baseURL: "https://primecapitalsc.com:3334/",
  headers: { "Content-Type": "application/json" },
});

export default api;