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
  Button,
  Drawer,
} from "antd";
import Link from "next/link";
import HomeSettings from "./home/HomeSettings";
import SideDrawer from "./SideDrawer";

const { Header, Content } = Layout;
const { Text, Title } = Typography;
const { Search } = Input;

const LayoutWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>The Daily Prophet</title>
      </Head>

      <Layout className="layout">
        <Header className="navheader">
          <Space>
            <SideDrawer />
            <Text className="navheader__title">
              <Link href="/">Next News</Link>
            </Text>
          </Space>
        </Header>

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
            <Col className="col" sm={{ span: 0 }} md={{ span: 8 }}>
              <HomeSettings />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
