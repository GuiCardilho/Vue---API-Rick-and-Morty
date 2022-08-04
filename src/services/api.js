import axios from "axios";

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 1000,
})

export default api