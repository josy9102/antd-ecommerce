import React from "react";
import { useSelector } from "react-redux";
import { Layout, ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
import { AppHeader, PageContent, AppFooter } from "./components";
import "../styles/layout.css";
import lightTheme from "../../config/themes/lightTheme";
import darkTheme from "../../config/themes/darkTheme";

import { ThemeState } from "../reducers/themeState";

const AppLayout = () => {
  const currentTheme = useSelector(
    (state: ThemeState) => state.themeState.theme
  );
  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorBgContainer:
            currentTheme === "light"
              ? lightTheme.appPrimary
              : darkTheme.appPrimary,
        },
      }}
    >
      <Layout className="appLayout">
        <BrowserRouter>
          <AppHeader />
          <PageContent />
          <AppFooter />
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
