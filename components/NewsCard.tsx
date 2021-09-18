import React, { useEffect, useRef } from "react";

import { Card, Typography, Row, Col, Image } from "antd";
import { News } from "../utils/types";

interface IProps {
  newsItem: News;
  search?: string;
}

const { Title, Text, Paragraph } = Typography;

const NewsCard: React.FC<IProps> = ({ newsItem, search = "" }) => {
  let imgSpan: number;

  const title = newsItem.title.replace("Bitcoin", "<mark>lemon</mark>");

  if (!newsItem.urlToImage) {
    imgSpan = 0;
  } else {
    imgSpan = 8;
  }

  useEffect(() => {}, []);

  const getHighlightedText = (text: string, highlight: string): JSX.Element => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <Card className="topnews" size="small">
      <Row>
        <Col className="topnews__content" span={24 - imgSpan - 1}>
          {newsItem.author && (
            <Text className="topnews__author">
              {newsItem.author.length > 20
                ? `${newsItem.author.slice(0, 20)}...`
                : newsItem.author}
            </Text>
          )}

          <Paragraph
            className="topnews__title"
            ellipsis={{ rows: 2, expandable: false }}
          >
            {getHighlightedText(newsItem.title, search)}
          </Paragraph>
          <Paragraph
            className="topnews__paragraph"
            ellipsis={{ rows: 2, expandable: false }}
          >
            {newsItem.description &&
              getHighlightedText(newsItem.description, search)}
          </Paragraph>
          <a className="topnews__link" href={newsItem.url}>
            View Full Coverage
          </a>
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

export default NewsCard;
