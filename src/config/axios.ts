import axios from 'axios';
import { apiUrl } from '../utils/constants';
import toast from 'react-hot-toast';

const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    config => {
        const token = ''
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error?.response) {
            switch (error?.response?.status) {
                case 401:
                    toast.error('Unauthorized access. Please Login');
                    break;
                case 403:
                    toast.error('You do not have the right permissions. Please contact admin');
                    break;
                case 400:
                    toast.error(error?.response?.data?.message);
                    break;
                case 500:
                    toast.error('Server error - please try again later');
                    break;
                default:
                    toast.error('Unable to complete request at the moment');
            }
        } else {
            toast.error('Network error');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;