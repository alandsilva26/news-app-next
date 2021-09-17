import React from "react";

import { Card, Typography, Row, Col, Image } from "antd";
import { News } from "../../utils/types";

interface IProps {
  newsItem: News;
}

const { Title, Text, Paragraph } = Typography;

const TopNewsCard: React.FC<IProps> = ({ newsItem }) => {
  let imgSpan: number;
  if (!newsItem.urlToImage) {
    imgSpan = 0;
  } else {
    imgSpan = 8;
  }

  return (
    <Card className="topnews" size="small" bordered={false}>
      <Row>
        <Col className="topnews__content" span={24 - imgSpan - 1}>
          {newsItem.author && (
            <Text className="topnews__author">{newsItem.author}</Text>
          )}
          <a className="topnews__link" href={newsItem.url}>
            <Paragraph
              className="topnews__title"
              ellipsis={{ rows: 2, expandable: false }}
            >
              {newsItem.title}
            </Paragraph>
          </a>
          <Paragraph
            className="topnews__paragraph"
            ellipsis={{ rows: 2, expandable: false }}
          >
            {newsItem.description}
          </Paragraph>
        </Col>
        {newsItem.urlToImage && (
          <Col className="topnews_img_container" span={imgSpan} offset={1}>
            <Image
              className="topnews__img"
              src={
                newsItem.urlToImage ??
                "https://miro.medium.com/max/1050/0*RIuporbn0_juKTpy"
              }
              preview={false}
              alt={newsItem.title}
            />
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default TopNewsCard;
