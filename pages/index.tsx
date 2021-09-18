import type { NextPage } from "next";
import TopNews from "../components/home/TopNews";
import { Typography, Row, Col, Divider } from "antd";
import HomeSettings from "../components/home/HomeSettings";
import NewsList from "../components/NewsList";

const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <TopNews />
    </>
  );
};

export default Home;
