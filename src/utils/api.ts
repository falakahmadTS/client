import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:5005',
    baseURL: 'https://server-cyan-chi-30.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
