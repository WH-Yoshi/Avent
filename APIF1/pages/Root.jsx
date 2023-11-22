import { Outlet } from "react-router";

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function Root (props) {

    return(
        <Layout>
            <Header>
               <nav>
                    {/* Navbar */}
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