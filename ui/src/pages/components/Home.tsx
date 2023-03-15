import React from "react";
import { Typography } from "antd";
import { Category } from ".";
const Home = () => {
  const { Title } = Typography;
  return (
    <div>
      <Title className="text-center" level={2}>
        All Products
      </Title>
      <Category />
    </div>
  );
};

export default Home;
