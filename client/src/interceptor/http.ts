import axios from 'axios';

const http = axios.create({
    baseURL: 'https://mystery-api-f87n.onrender.com/api/',
    withCredentials: true
});

http.interceptors.request.use(
    (config) => {
        return {
            ...config,
            url: `${http.defaults.baseURL}${config.url}`,
        };
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;