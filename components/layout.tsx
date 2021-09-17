import Head from "next/head";
import { Layout, Menu, Input, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Search } = Input;

const LayoutWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>The Daily Prophet</title>
      </Head>

      <Layout className="layout">
        <Header className="nav">
          <div>
            <Search className="search" placeholder="Search" />
          </div>

          <Menu
            className="nav__menu"
            mode="horizontal"
            overflowedIndicator={<MenuOutlined />}
          >
            <Menu.Item key={1}>Menu 1</Menu.Item>
            <Menu.Item key={2}>Menu 2</Menu.Item>
            <Menu.Item key={3}>Menu 3</Menu.Item>
          </Menu>
        </Header>

        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
