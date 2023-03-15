import React from "react";
import { Layout } from "antd";
import AppRoutes from "./AppRoutes";

const PageContent = () => {
  const { Content } = Layout;
  return (
    <Content className="pageContent">
      <AppRoutes />
    </Content>
  );
};

export default PageContent;
