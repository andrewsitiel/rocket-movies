import axios from "axios";

const api = axios.create({
  baseURL: "https://rocket-movies-api.onrender.com"
})

export { api };