import React, { useState } from 'react';
import { Layout } from 'antd';
import AppHeader from '../../components/Header';
import HomePageContent from './HomePageContent';
import AppSideMenu from '../../components/SideMenu';

const { Content, Sider } = Layout;

const HomePage = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className="min-h-screen">
            <AppHeader collapsed={collapsed} toggle={toggleCollapsed} />
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
                <Content className="mt-6 mx-4">
                    <HomePageContent />
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomePage;
