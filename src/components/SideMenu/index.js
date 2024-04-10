import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';

const AppSideMenu = () => {
    const menuItems = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Home',
        },
        {
            key: '2',
            icon: <SettingOutlined />,
            label: 'Settings',
        },
    ];

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menuItems}
            style={{ height: '100%', borderRight: 0 }}
        />
    );
};

export default AppSideMenu;
