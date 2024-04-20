import React, { useEffect, useState } from 'react';
import { Table, message, Spin } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'; // Impor useNavigate
import { fetchDataFromFile } from '../../services/dataService';
import SelectFileModal from '../../components/Popup/selectFile';

const ShowDataContent = () => {
    const [filename, setFilename] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [modalVisible, setModalVisible] = useState(false);

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const navigate = useNavigate();  // Inisialisasi useNavigate

    useEffect(() => {
        const fileParam = query.get('filename');
        if (fileParam) {
            setFilename(fileParam);
        } else {
            setModalVisible(true);
        }
    }, [location]);

    useEffect(() => {
        if (filename) {
            loadData(filename, currentPage, perPage);
        }
    }, [filename, currentPage, perPage]);

    const loadData = async (filename, page, perPage) => {
        setLoading(true);
        try {
            const result = await fetchDataFromFile(filename, page, perPage);
            setLoading(false);
            if (result && result.data && result.columns) {
                setData(result.data);
                setTotalRecords(result.total);
                setColumns(result.columns.map(column => ({
                    title: column.toUpperCase(),
                    dataIndex: column,
                    key: column
                })));
            } else {
                message.error('Data is empty or malformed');
            }
        } catch (error) {
            setLoading(false);
            message.error('Failed to fetch data');
            console.error('Error fetching data:', error);
        }
    };

    const handleFileSelect = (selectedFile) => {
        const fullName = `${selectedFile.name}${selectedFile.extension}`;
        setFilename(fullName);
        navigate(`/show-data?filename=${fullName}`);  // Navigasi dengan filename yang baru
        setModalVisible(false);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        if (!filename) {
            navigate('/');  // Jika tidak ada file yang dipilih, kembali ke beranda atau halaman lain
        }
    };

    return (
        <div>
            {loading ? <Spin size="large" className="flex justify-center items-center h-64"/> :
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        showQuickJumper: true,
                        current: currentPage,
                        pageSize: perPage,
                        total: totalRecords,
                        onChange: (page, pageSize) => {
                            setCurrentPage(page);
                            setPerPage(pageSize);
                        },
                        showSizeChanger: true,
                        onShowSizeChange: (current, size) => setPerPage(size)
                    }}
                    rowKey={(record, index) => index + currentPage * perPage - perPage}
                />}
            <SelectFileModal
                isVisible={modalVisible}
                onSelect={handleFileSelect}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default ShowDataContent;
