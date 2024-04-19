import axiosInstance from '../utils/axiosConfig';

export const fetchData = async () => {
    try {
        const response = await axiosInstance.get('/data');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteFile = async (filename) => {
    try {
        const response = await axiosInstance.delete(`/data/${filename}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchDataFromFile = async (filename, page, perPage) => {
    try {
        const response = await axiosInstance.get(`/data-show?filename=${filename}&page=${page}&per_page=${perPage}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
