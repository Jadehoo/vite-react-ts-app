import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const { SubMenu } = Menu;

// 定义静态对象
interface Props {
  location: Location;
}

function MenuCom(props: Props) {
  const [selectedKeys, setSelectedKeys] = useState<string>("home");

  const onClick = (e: any): void => {
    setSelectedKeys(e.key);
  };

  // useEffect(() => {
  //   console.log("props :>> ", props);
  //   let pathName = props.location.pathname;
  //   setSelectedKeys(pathName.slice(1));
  //   console.log("selectedKeys :>> ", selectedKeys);
  // }, [props.location]);

  return (
    <Menu
      onClick={(e): void => onClick(e)}
      selectedKeys={[selectedKeys]}
      mode="inline"
    >
      <Menu.Item key="home" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="user" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
    </Menu>
  );
}
export default MenuCom;
