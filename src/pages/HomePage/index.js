import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import AppHeader from '../../components/Header';
import HomePageContent from './HomePageContent';
import AppSideMenu from '../../components/SideMenu';

const { Content, Sider } = Layout;

const HomePage = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [open, setOpen] = useState(false); // Mengganti visible dengan open

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Layout className="min-h-screen">
            <AppHeader collapsed={collapsed} toggle={toggleCollapsed} showDrawer={showDrawer} />
            <Layout>
                <Sider
                    width={200}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    className="min-h-screen border-r-0 lg:block hidden"
                >
                    <AppSideMenu />
                </Sider>
                <Drawer
                    title="Menu"
                    placement="left"
                    closable={true}
                    onClose={onClose}
                    open={open}
                    className="lg:hidden"
                >
                    <AppSideMenu />
                </Drawer>
                <Content className="mt-6 mx-4">
                    <HomePageContent />
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomePage;
