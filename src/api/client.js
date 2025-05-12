// api/client.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://growbit.netlify.app/api", // URL base de la API
  withCredentials: true, // envía cookies automáticamente
});

export default api;
