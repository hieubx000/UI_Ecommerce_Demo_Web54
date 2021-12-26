import React from "react";
import { Layout, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer";

const {Content, Sider } = Layout;
export default function ProductLayout({children}) {
  return (
    <Layout>
      <NavBar />

      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
                <Link to="/">
                    Home
                </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
              <Link to='/product'>
                  Product
              </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={250}>
            <SideBar/>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>

      <Footer />
    </Layout>
  );
}
