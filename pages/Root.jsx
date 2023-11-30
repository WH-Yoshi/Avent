import { Outlet } from "react-router";

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Root (props) {

    return(
        <Layout>
            <Header>
               <nav>
                    <a href="/Main">Main</a>
                    <a href="/Seasons">Seasons</a>
                    <a href="/Drivers">Drivers</a>
               </nav>
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer>
                <h2>Footer</h2>
            </Footer>
        </Layout>
    )
}