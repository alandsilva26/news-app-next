import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import HomeSettings from "./home/HomeSettings";

const SideDrawer = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = (): void => {
    setVisible(true);
  };

  const onClose = (): void => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Side Drawer"
        className="sidedrawer"
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <HomeSettings />
      </Drawer>
    </>
  );
};

export default SideDrawer;
