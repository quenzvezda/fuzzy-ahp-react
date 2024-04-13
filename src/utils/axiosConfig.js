import axios from 'axios';

// Menggunakan environment variable dengan nilai default
const apiHost = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

const axiosInstance = axios.create({
    baseURL: `${apiHost}/api`,
});

export default axiosInstance;
