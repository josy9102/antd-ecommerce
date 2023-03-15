import React from 'react'
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
import { AppHeader, PageContent, AppFooter } from "./components";
import "../styles/layout.css";

const AppLayout = () => {
  return (
    <Layout className="appLayout">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </Layout>
  );
};


export default AppLayout