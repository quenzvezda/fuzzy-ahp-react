import React, { useEffect, useState } from 'react';
import { Modal, List, Button } from 'antd';
import { fetchData } from '../../services/dataService';

const FileSelectorModal = ({ isVisible, onSelect, onCancel }) => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (isVisible) {
            loadFiles();
        }
    }, [isVisible]);

    const loadFiles = async () => {
        try {
            const data = await fetchData();
            setFiles(data);
        } catch (error) {
            console.error('Failed to fetch files:', error);
        }
    };

    return (
        <Modal
            title="Select a File"
            open={isVisible}
            onCancel={onCancel}
            footer={null}
        >
            <List
                itemLayout="horizontal"
                dataSource={files}
                renderItem={item => (
                    <List.Item
                        actions={[<Button key="select" onClick={() => onSelect(item)}>Select</Button>]}
                    >
                        <List.Item.Meta
                            title={item.name}
                        />
                    </List.Item>
                )}
            />
        </Modal>
    );
};

export default FileSelectorModal;
