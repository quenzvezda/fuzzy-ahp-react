import { HomeOutlined, DatabaseOutlined } from '@ant-design/icons';
import { MenuItemType } from 'antd/lib/menu/hooks/useItems';

const menuItems: MenuItemType[] = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: '2',
        icon: <DatabaseOutlined />,
        label: 'Data Product',
    },
];

export default menuItems;
