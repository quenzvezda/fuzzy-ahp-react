import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';

const AppSideMenu = () => {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
        </Menu>
    );
};

export default AppSideMenu;
