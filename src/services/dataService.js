import axiosInstance from '../utils/axiosConfig';

export const fetchData = async () => {
    try {
        const response = await axiosInstance.get('/data');
        return response.data;
    } catch (error) {
        throw error;
    }
};
