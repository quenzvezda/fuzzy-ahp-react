//ShowDataPage/index.js

import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import AppHeader from '../../components/Header';
import ShowDataContent from './ShowDataContent';
import AppSideMenu from '../../components/SideMenu';
import {useLocation} from "react-router-dom";

const { Content, Sider } = Layout;

const ShowDataPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const filename = query.get('filename');

    const [collapsed, setCollapsed] = useState(true);
    const [open, setOpen] = useState(false);

    console.log("ShowDataPage Render", { collapsed, open });

    const toggleCollapsed = () => {
        console.log("toggleCollapsed called");
        setCollapsed(!collapsed);
    };

    const showDrawer = () => {
        console.log("showDrawer called");
        setOpen(true);
    };

    const onClose = () => {
        console.log("onClose called");
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
                    <ShowDataContent filename={filename}/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default ShowDataPage;
