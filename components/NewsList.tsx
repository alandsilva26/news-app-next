import { useState, useEffect } from "react";
import useFetchNews from "../utils/useFetchNews";
import NewsCard from "./NewsCard";
import { News } from "../utils/types";
import { useSettings } from "../utils/SettingsProvider";
import { API_KEY } from "../utils/config";
import { Space, Skeleton, Typography, Card } from "antd";
import Skeletons from "./Skeletons";

const { Title, Text } = Typography;

interface IProps {
  search?: string;
  title?: string;
  data: News[];
  country?: string;
  loading: boolean;
  error: boolean;
  pageSize?: number;
}

const NewsList = ({
  search = "",
  title = "News",
  data,
  loading,
  error,
  country,
  pageSize = 10,
}: IProps): JSX.Element => {
  if (loading) {
    return <Skeletons size={pageSize} />;
  }

  if (error) {
    return (
      <h2>
        <Text type="danger"> Unexpected Error </Text>
      </h2>
    );
  }

  return (
    <>
      <div className="section__title">
        <hr />
        <Title className="section__title-text" level={4}>
          {title}
        </Title>
      </div>
      <Space direction="vertical" size={[0, 20]}>
        {data.length == 0 ? (
          <Card bordered={false} title="No Results" />
        ) : (
          data.map((newsItem: News, index: number) => {
            return <NewsCard key={index} newsItem={newsItem} search={search} />;
          })
        )}
      </Space>
    </>
  );
};

export default NewsList;
