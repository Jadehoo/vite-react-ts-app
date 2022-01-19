import React, { useState, useCallback } from "react";
import { Layout } from "antd";
import MenuCom from "../components/Menu";

const { Header, Footer, Sider, Content } = Layout;

function BasicLayoutCom(props: Props): JSX.Element {
  return (
    <Layout>
      <Header>Header</Header>
    <MenuCom />
      <Footer>Footer</Footer>
    </Layout>
  );
}
export default BasicLayoutCom;
