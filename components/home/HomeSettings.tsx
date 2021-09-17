import React from "react";
import { Button, Space, Typography } from "antd";
import { useSettings } from "../../utils/SettingsProvider";
import { COUNTRY_LIST } from "../../utils/config";

const { Title, Text } = Typography;

const HomeSettings = (): JSX.Element => {
  const { country, setCountry } = useSettings();

  const handleClick = (newCountry: string) => {
    setCountry(newCountry);
  };

  return (
    <div>
      <Space direction="vertical" size={[50, 15]}>
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
      </Space>
    </div>
  );
};

export default HomeSettings;
