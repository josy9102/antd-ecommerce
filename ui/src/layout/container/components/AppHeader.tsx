import React from "react";
import { Menu, Layout, Typography, Row, Col } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: <HomeFilled />,
    key: "",
  },
  {
    label: "Men",
    key: "men",
    children: [
      {
        label: "Men's Shirts",
        key: "mens-shirts",
      },
      {
        label: "Men's Shoes",
        key: "mens-shoes",
      },
      {
        label: "Men's Watches",
        key: "mens-watches",
      },
    ],
  },
  {
    label: "Women",
    key: "women",
    children: [
      {
        label: "Women's Dresses",
        key: "womens-dresses",
      },
      {
        label: "Women's Shoes",
        key: "womens-shoes",
      },
      {
        label: "Women's Watches",
        key: "womens-watches",
      },
      {
        label: "Women's Bags",
        key: "womens-bags",
      },
      {
        label: "Women's Jewellery",
        key: "womens-jewellery",
      },
    ],
  },
  {
    label: "Fragances",
    key: "fragances",
  },
];

const AppHeader = () => {
  const { Title } = Typography;
  const { Header } = Layout;

  const navigate = useNavigate();

  const onMenuClick = (item: any) => {
    console.log(typeof item);
    navigate(`/${item.key}`);
  };

  return (
    <Header className="appHeader">
      <Row align="middle" gutter={16}>
        <Col flex="auto">
          <Menu
            items={menuItems}
            mode="horizontal"
            onClick={onMenuClick}
          />
        </Col>
        <Col>
          <Title level={1} style={{ margin: 0}}>
            JE Fashion Store
          </Title>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
