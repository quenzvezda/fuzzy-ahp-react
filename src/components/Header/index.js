import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = ({ collapsed, toggle, showDrawer }) => {
    return (
        <Header className="header flex items-center py-0 px-5 h-13">
            <div className="lg:hidden">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger text-white',
                    onClick: showDrawer,
                })}
            </div>
            <h3 className="text-white m-0 text-3xl font-semibold ml-4">Fuzzy AHP</h3>
        </Header>
    );
};

export default AppHeader;
