import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { AppHeader, PageContent, AppFooter } from "./components";
import "../styles/layout.css";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
};


export default AppLayout