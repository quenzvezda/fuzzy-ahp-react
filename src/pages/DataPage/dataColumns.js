import {Button} from "antd";
import {DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const formatFileSize = (sizeInBytes) => {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    let size = sizeInBytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(1)} ${units[unitIndex]}`;
};


export const dataColumns = (showDeleteConfirm) => [
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
        title: 'Size',
        key: 'size',
        render: (text, record) => formatFileSize(record.size),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <>
                <Button danger icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(record.name + record.extension)} />
                <Link to={`/show-data?filename=${record.name + record.extension}`}>
                    <Button icon={<EyeOutlined />} style={{ marginLeft: 8 }} />
                </Link>
            </>
        ),
    },

];
