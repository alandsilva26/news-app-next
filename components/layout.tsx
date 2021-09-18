import Head from "next/head";
import {
  Typography,
  Divider,
  Layout,
  Menu,
  Input,
  Space,
  Row,
  Col,
} from "antd";
import Link from "next/link";
import HomeSettings from "./home/HomeSettings";
import { MenuOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const LayoutWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>The Daily Prophet</title>
      </Head>

      <Layout className="layout">
        {/* <Header className="nav">
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
        </Header> */}

        <Title className="page-title">
          <Link href="/">Next News</Link>
        </Title>
        <Divider />

        {/* <Content>{children}</Content> */}

        <Content>
          <Row className="container">
            <Col className="col" sm={{ span: 24 }} md={{ span: 16 }}>
              {children}
            </Col>
            <Col className="col" span={8}>
              <HomeSettings />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
