import React, { useState, useCallback } from "react";
import { Layout } from "antd";
import MenuCom from "../components/Menu";
import "./BasicLayout.less";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import HomeIndex from "../pages/home";
import UserIndex from "../pages/user";

const { Header, Footer, Sider, Content } = Layout;

function BasicLayoutCom(props: Props): JSX.Element {

  return (
    <Layout className="page-basic">
      <Header>Header</Header>
      <Layout>
        <Sider>
          <MenuCom location={props.location} />
        </Sider>
        <Content className="content">
          <Route
            render={() => {
              return (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => {return <HomeIndex props={props}/>}}
                  />
                </Switch>
              );
            }}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
export default BasicLayoutCom;
