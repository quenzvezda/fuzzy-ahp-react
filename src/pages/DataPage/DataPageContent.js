import React, { useEffect, useState } from 'react';
import {Table, Button} from 'antd';
import { fetchData } from '../../services/dataService';
import {UploadOutlined} from "@ant-design/icons";
import UploadModal from "../../components/UploadModal";
import { dataColumns } from './dataColumns';

const DataPageContent = () => {
    const [fileData, setFileData] = useState([]);
    const [uploadModalVisible, setUploadModalVisible] = useState(false);

    const loadData = async () => {
        try {
            const data = await fetchData();
            setFileData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        loadData().catch(error => {
            console.error('Error loading data in useEffect:', error);
        });
    }, []);

    return (
        <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Files:</span>
                <Button
                    icon={<UploadOutlined/>}
                    onClick={() => setUploadModalVisible(true)}
                >
                    Upload
                </Button>
            </div>
            <Table columns={dataColumns} dataSource={fileData} rowKey="name" scroll={{x: 'max-content'}}/>
            <UploadModal
                visible={uploadModalVisible}
                onClose={() => setUploadModalVisible(false)}
                onUploadSuccess={loadData}
            />
        </div>
    );
};

export default DataPageContent;
