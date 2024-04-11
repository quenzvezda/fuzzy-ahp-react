import React from 'react';
import { Menu } from 'antd';
import menuItems from './menuItems';
import { useLocation } from 'react-router-dom';

const AppSideMenu = () => {
    const location = useLocation();

    return (
        <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ height: '100%', borderRight: 0 }}
        />
    );
};

export default AppSideMenu;
