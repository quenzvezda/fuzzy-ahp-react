import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../../components/Header';
import AppFooter from '../../components/Footer';
import HomePageContent from './HomePageContent';

const { Content } = Layout;

const HomePage = () => {
    return (
        <Layout className="min-h-screen">
            <Layout>
                <AppHeader />
                <Content className="mt-6 mx-4">
                    <HomePageContent />
                </Content>
                <AppFooter />
            </Layout>
        </Layout>
    );
};

export default HomePage;
