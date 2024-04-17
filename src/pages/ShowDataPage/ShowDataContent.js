import React from 'react';
import { Table } from 'antd';

const ShowDataContent = () => {
    const columns = [
        // Definisikan kolom tabel Anda di sini
    ];

    const data = [
        // Data sementara atau nanti bisa diambil dari API
    ];

    return (
        <Table columns={columns} dataSource={data} />
    );
};

export default ShowDataContent;
