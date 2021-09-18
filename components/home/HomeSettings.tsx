import React from "react";
import { Input, Affix, Button, Divider, Space, Typography } from "antd";
import { useRouter } from "next/router";
import { useSettings } from "../../utils/SettingsProvider";
import { COUNTRY_LIST, TOPIC_LIST } from "../../utils/config";

const { Title, Text } = Typography;
const { Search } = Input;

const HomeSettings = (): JSX.Element => {
  const { country, setCountry } = useSettings();

  const router = useRouter();

  const handleClick = (newCountry: string) => {
    setCountry(newCountry);
  };

  const handleTopicClick = (topic: string): void => {
    router.push({ pathname: "/news", query: { search_query: topic } });
  };

  const handleSearch = (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    router.push({ pathname: "/news", query: { search_query: value } });
  };

  return (
    <Affix offsetTop={10}>
      <Space direction="vertical" size={[50, 15]}>
        <Search
          className="searchinput"
          placeholder="Search for news"
          size="large"
          enterButton
          onSearch={handleSearch}
        />
        <Divider />

        <Text strong={true}>Country</Text>
        <Space size={[8, 16]} wrap>
          {COUNTRY_LIST.map((_country, index) => {
            return (
              <Button
                key={index}
                type={country === _country ? "primary" : "default"}
                onClick={(e) => handleClick(_country)}
              >
                {_country}
              </Button>
            );
          })}
        </Space>
        <Divider />
        <Text strong={true}>Topics</Text>
        <Space size={[8, 16]} wrap>
          {TOPIC_LIST.map(
            (_topic: string, index: number): JSX.Element => {
              return (
                <Button key={index} onClick={(e) => handleTopicClick(_topic)}>
                  {_topic}
                </Button>
              );
            }
          )}
        </Space>
      </Space>
    </Affix>
  );
};

export default HomeSettings;
