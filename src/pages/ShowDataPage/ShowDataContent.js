import React, { useEffect, useState } from 'react';
import { Table, message, Spin } from 'antd';
import { fetchDataFromFile } from '../../services/dataService';

const ShowDataContent = ({ filename }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [perPage, setPerPage] = useState(10);

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

    return (
        <div>
            {loading ? <Spin size="large" className="flex justify-center items-center h-64"/> :
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
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
                    rowKey={record => `${record.Rating}-${record.Price}-${record.Response_Chat}`}
                />}
        </div>
    );
};

export default ShowDataContent;
