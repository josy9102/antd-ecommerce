import React from "react";
import { Layout, Typography, Row, Col } from "antd";

const AppFooter = () => {
  const { Footer } = Layout;
  const { Link } = Typography;

  return (
    <Footer className="appFooter">
      <Row justify="center" align="middle" style={{ width: "100%"}} gutter={16}>
        <Col flex="auto">
          <Link href="https://www.google.com" target="_blank">
            Privacy Policy
          </Link>
        </Col>
        <Col flex="auto">
          <Link href="https://www.google.com" target="_blank">
            Terms & Conditions
          </Link>
        </Col>
        <Col flex="auto">
          <Link href="https://www.google.com" target="_blank">
            Return Policy
          </Link>
        </Col>
        <Col flex="auto">
          <Link href="tel:+123456789" target="_blank">
            +123456789
          </Link>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
