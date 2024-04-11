import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchData } from '../../services/dataService';

const DataPageContent = () => {
    const [fileData, setFileData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchData();
                setFileData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Extension',
            dataIndex: 'extension',
            key: 'extension',
        },
        {
            title: 'Date Created',
            dataIndex: 'date_created',
            key: 'date_created',
        },
        {
            title: 'Size (Bytes)',
            dataIndex: 'size',
            key: 'size',
        },
    ];

    return (
        <div className="mt-4">
            <Table columns={columns} dataSource={fileData} rowKey="name" />
        </div>
    );
};

export default DataPageContent;
