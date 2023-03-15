import React from "react";
import { Menu } from "antd";
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
  const navigate = useNavigate();
  const onMenuClick = (item: any) => {
    console.log(typeof item);
    navigate(`/${item.key}`);
  };

  return (
    <div className="appHeader">
      <Menu items={menuItems} mode="horizontal" onClick={onMenuClick} />
    </div>
  );
};

export default AppHeader;
