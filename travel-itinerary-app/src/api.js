import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001/api/itineraries', 
});

export default api;