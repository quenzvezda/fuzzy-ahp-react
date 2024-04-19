import React, { useEffect, useState } from 'react';
import { Table, Pagination, message } from 'antd';
import { fetchDataFromFile } from '../../services/dataService';
import { Spin } from "antd";

const ShowDataContent = ({ filename }) => {
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [perPage, setPerPage] = useState(5);

    useEffect(() => {
        console.log("useEffect Triggered:", { filename, currentPage, perPage });
        if (filename) {
            loadData(filename, currentPage, perPage);
        }
    }, [filename, currentPage, perPage]);

    const loadData = async (filename, page, perPage) => {
        setLoading(true);
        try {
            const result = await fetchDataFromFile(filename, page, perPage);
            setLoading(false);
            if (result && result.data) {
                setData(result.data);
                setTotalRecords(result.data.length);
                if (result.data.length > 0) {
                    setColumns(Object.keys(result.data[0]).map(key => ({
                        title: key.toUpperCase(),
                        dataIndex: key,
                        key: key
                    })));
                }
            } else {
                setLoading(false);
                message.error('Data is empty or malformed');
            }
        } catch (error) {
            message.error('Failed to fetch data');
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            {loading ? <Spin size="large" className="flex justify-center items-center h-64"/> :
            <Table columns={columns} dataSource={data} pagination={false} rowKey="id" />}
            <Pagination
                current={currentPage}
                total={totalRecords}
                pageSize={perPage}
                onChange={(page, pageSize) => {
                    setCurrentPage(page);
                    setPerPage(pageSize);
                }}
                showSizeChanger
                onShowSizeChange={(current, size) => setPerPage(size)}
            />
        </div>
    );
};

export default ShowDataContent;
