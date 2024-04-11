import React from 'react';
import { Menu } from 'antd';
import menuItems from './menuItems';

const AppSideMenu = () => {
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
