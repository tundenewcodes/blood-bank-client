import axios from "axios";

const API = axios.create({ baseURL: "https://blood-bank-api-x5yi.onrender.com/api/v1" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
