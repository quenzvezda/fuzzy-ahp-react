import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const DataPageContent = () => {
    return (
        <div className="space-y-4">
            <Title level={2}>Data Product</Title>
            <Paragraph>
                This is the content of the Data Product page.
            </Paragraph>
            {/* Tambahkan lebih banyak konten di sini sesuai kebutuhan */}
        </div>
    );
};

export default DataPageContent;
