import type { NextPage } from "next";
import TopNews from "../components/home/TopNews";
import { Typography, Row, Col, Divider } from "antd";
import HomeSettings from "../components/home/HomeSettings";

const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <Title className="page-title">The Daily Prophet</Title>
      <Divider />
      <Row className="container">
        <Col className="col" sm={{ span: 24 }} md={{ span: 16 }}>
          <TopNews />
        </Col>
        <Col className="col" span={8}>
          <HomeSettings />
        </Col>
      </Row>
    </>
  );
};

export default Home;
