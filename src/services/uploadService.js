import axiosInstance from '../utils/axiosConfig';

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    // TODO kalau mau pisahkan menjadi router / controller.
    return axiosInstance.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default uploadFile;
