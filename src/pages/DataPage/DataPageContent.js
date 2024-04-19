import React, { useEffect, useState } from 'react';
import {Table, Button, message, Modal, Spin} from 'antd';
import { fetchData, deleteFile } from '../../services/dataService';
import {UploadOutlined} from "@ant-design/icons";
import UploadModal from "../../components/UploadModal";
import { dataColumns } from './dataColumns';

const DataPageContent = () => {
    const [fileData, setFileData] = useState([]);
    const [uploadModalVisible, setUploadModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await fetchData();
            setFileData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData().catch(error => {
            console.error('Error loading data in useEffect:', error);
        });
    }, []);

    const handleDelete = async (filename) => {
        try {
            await deleteFile(filename);
            message.success('File deleted successfully');
            await loadData();
        } catch (error) {
            message.error('Failed to delete file');
            console.error('Error deleting file:', error);
        }
    };

    const showDeleteConfirm = (filename) => {
        Modal.confirm({
            title: 'Are you sure delete this file?',
            content: `Filename: ${filename}`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                handleDelete(filename);
            },
        });
    };

    return (
        <div className="mt-0">
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Files:</span>
                <Button
                    icon={<UploadOutlined/>}
                    onClick={() => setUploadModalVisible(true)}
                >
                    Upload
                </Button>
            </div>
            { loading ? <Spin size="large" className="flex justify-center items-center h-64" /> :
            <Table
                columns={dataColumns(showDeleteConfirm)}
                dataSource={fileData}
                rowKey="name"
                scroll={{x: 'max-content'}}
                pagination={{ pageSize: 10}}
            /> }
            <UploadModal
                visible={uploadModalVisible}
                onClose={() => setUploadModalVisible(false)}
                onUploadSuccess={loadData}
            />
        </div>
    );
};

export default DataPageContent;
