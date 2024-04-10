import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = ({ collapsed, toggle }) => {
    return (
        <Header className="header flex items-center py-0 px-5 h-13">
            <h3 className="text-white m-0 text-3xl font-semibold">Fuzzy AHP</h3>
        </Header>
    );
};

export default AppHeader;
