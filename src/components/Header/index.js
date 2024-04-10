import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import rankingIcon from '../../assets/ranking-icon-white.png';

const { Header } = Layout;

const AppHeader = ({ collapsed, showDrawer }) => {
    const MenuIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined; // Pilih ikon berdasarkan state collapsed

    return (
        <Header className="header flex items-center py-0 px-5 h-13">
            <div className="lg:hidden">
                <MenuIcon
                    className="trigger text-white text-2xl py-14"
                    onClick={showDrawer}
                />
            </div>
            <img src={rankingIcon} alt="Ranking Icon" className="w-6 h-6 lg:w-8 lg:h-8 mx-4 lg:mx-2" />
            <h3 className="text-white m-0 text-3xl font-semibold lg:mx-4">Fuzzy AHP</h3>
        </Header>
    );
};

export default AppHeader;
