import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/itineraries', 
});

export default api;