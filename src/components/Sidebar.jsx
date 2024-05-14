import { UseState, useState } from 'react';
import { Layout } from "antd";
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, theme } from 'antd';

const {Header, Sider}  = Layout;

function Sidebar() {

    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false);


    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const {
        token: {colorBgContainer}
    } = theme.useToken();

    return(
        <>
        <Layout>
            <Sider theme={darkTheme ? 'dark' : 'light'} className="sidebar">
                <Logo/>
                <MenuList darkTheme={darkTheme} />
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
            </Sider>
        </Layout>
        <Layout>
            <Header style={{padding: 0, background: colorBgContainer}}>
                <Button type='text' icon={ collapsed ? 
                <MenuUnfoldOutlined /> : 
                <MenuFoldOutlined /> } />
            </Header>
        </Layout>
        </>
    )
}

export default Sidebar