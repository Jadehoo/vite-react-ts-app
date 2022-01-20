import { useEffect } from "react";
import { Table } from "antd";

import axios from "axios";
import "../../mock/index";
import { useState } from "react";

const HomeIndex = (props: Props) => {
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "职业",
      dataIndex: "job",
      key: "job",
    },
  ];
  useEffect(() => {
    axios
      .get("/mock", { dataType: "json" }) //这列的'/mock'与mock.js文件里的地址一致
      .then((res) => {
        console.log(res.data.userinfo);
        setDataSource(res.data.userinfo);
      });
  },[]);
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default HomeIndex;
