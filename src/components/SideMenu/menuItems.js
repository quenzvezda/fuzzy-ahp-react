import { HomeOutlined, DatabaseOutlined } from '@ant-design/icons';
import { MenuItemType } from 'antd/lib/menu/hooks/useItems';
import { Link } from 'react-router-dom';

const menuItems: MenuItemType[] = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: <Link to="/">Home</Link>,
    },
    {
        key: '/data',
        icon: <DatabaseOutlined />,
        label: <Link to="/data">Data Product</Link>,
    },
];

export default menuItems;
