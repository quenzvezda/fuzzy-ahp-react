import React, { useState } from 'react';
import { Modal, Upload, Button, Progress, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { uploadFile } from '../../services/uploadService';

const UploadModal = ({ visible, onClose, onUploadSuccess }) => {
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleUpload = async () => {
        setUploading(true);
        try {
            const file = fileList[0];
            const response = await uploadFile(file.originFileObj, (event) => {
                setProgress(Math.round((100 * event.loaded) / event.total));
            });
            message.success('File uploaded successfully');
            onUploadSuccess();
            console.log(response.data); // Handle response data
        } catch (error) {
            message.error('File upload failed');
            console.error('Error uploading file:', error);
        }
        setUploading(false);
        onClose();
    };

    const handleChange = ({ fileList }) => {
        setFileList(fileList);
    };

    return (
        <Modal
            title="Upload File"
            open={visible}
            onCancel={onClose}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Cancel
                </Button>,
                <Button
                    key="upload"
                    type="primary"
                    onClick={handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                >
                    Upload
                </Button>,
            ]}
        >
            <Upload.Dragger
                name="file"
                multiple={false}
                fileList={fileList}
                beforeUpload={() => false}
                onChange={handleChange}
            >
                <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Upload.Dragger>
            {uploading && <Progress percent={progress} />}
        </Modal>
    );
};

export default UploadModal;
