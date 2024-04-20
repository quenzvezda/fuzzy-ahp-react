import React, { useEffect, useState } from 'react';
import { Modal, List, Button, Spin } from 'antd';
import { fetchData } from '../../services/dataService';

const FileSelectorModal = ({ isVisible, onSelect, onCancel }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);  // State untuk menangani loading

    useEffect(() => {
        if (isVisible) {
            loadFiles();
        }
    }, [isVisible]);

    const loadFiles = async () => {
        setLoading(true);  // Mulai loading
        try {
            const data = await fetchData();
            setFiles(data);
            setLoading(false);  // Hentikan loading setelah data di-fetch
        } catch (error) {
            console.error('Failed to fetch files:', error);
            setLoading(false);  // Pastikan loading dihentikan jika ada error
        }
    };

    return (
        <Modal
            title="Select a File"
            open={isVisible}
            onCancel={onCancel}
            footer={null}
        >
            {loading ? (
                <Spin size="large" className="flex justify-center items-center h-64" />
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={files}
                    renderItem={item => (
                        <List.Item
                            actions={[<Button key="select" onClick={() => onSelect(item)}>Select</Button>]}
                        >
                            <List.Item.Meta
                                title={`${item.name}${item.extension}`}  // Jangan lupa untuk menyertakan ekstensi file
                            />
                        </List.Item>
                    )}
                />
            )}
        </Modal>
    );
};

export default FileSelectorModal;
