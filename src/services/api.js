import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackvil4.herokuapp.com',
});

export default api;