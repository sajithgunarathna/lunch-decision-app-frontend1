import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // Adjust this URL as necessary
});

export default instance;