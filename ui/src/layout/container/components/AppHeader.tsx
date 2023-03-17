import React, { useState, useEffect } from "react";
import {
  Menu,
  Layout,
  Typography,
  Row,
  Col,
  Badge,
  Drawer,
  Table,
  InputNumber,
  Button,
  Form,
  Input,
  Space,
  Checkbox,
  message,
} from "antd";
import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import i18next from "i18next";
import { getCart } from "../../../api";

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
          <Menu items={menuItems} mode="horizontal" onClick={onMenuClick} />
        </Col>
        <Col>
          <Title level={1} style={{ margin: 0 }}>
            JE Fashion Store
          </Title>
        </Col>
        <Col>
          <AppCart />
        </Col>
      </Row>
    </Header>
  );
};

function AppCart() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<[]>([]);

  const { Paragraph } = Typography;

  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);

  const onConfirmOrder = (values: any) => {
    console.log(values);

    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);

    message.success("Your order has been placed successfully.")
  };

  return (
    <div>
      <div className="vertical-align" onClick={() => setCartDrawerOpen(true)}>
        <Badge count={7}>
          <ShoppingCartOutlined className="shoppingCartIcon" />
        </Badge>
      </div>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        title={i18next.t("shopping-cart.title") as string}
        contentWrapperStyle={{ width: 500 }}
      >
        <Table
          pagination={false}
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => {
                return <span>{value}€</span>;
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              render: (value, record: { id: number }) => {
                return (
                  <InputNumber
                    min={0}
                    defaultValue={value}
                    onChange={(value) => {
                      setCartItems((prev: any) =>
                        prev.map(
                          (cart: {
                            id: number;
                            total: number;
                            price: number;
                          }) => {
                            if (record.id === cart.id) {
                              cart.total = cart.price * value;
                            }
                            return cart;
                          }
                        )
                      );
                    }}
                  />
                );
              },
            },
            {
              title: "Total",
              dataIndex: "total",
            },
          ]}
          dataSource={cartItems}
          summary={(data: any) => {
            const total = data.reduce((prev?: number, current?: any) => {
              return prev + current?.total;
            }, 0);
            return <span>Total: {total} </span>;
          }}
        ></Table>
        <Button type="primary" onClick={() => setCheckoutDrawerOpen(true)}>
          Proceed with Checkout
        </Button>
      </Drawer>
      <Drawer
        open={checkoutDrawerOpen}
        contentWrapperStyle={{ width: 500 }}
        onClose={() => setCheckoutDrawerOpen(false)}
        title={i18next.t("checkout.title") as string}
      >
        <Form
          onFinish={onConfirmOrder}
          validateTrigger="onBlur"
          layout="vertical"
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your full name.",
                },
              ]}
              label="Full Name"
              name="full-name"
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email address.",
                },
              ]}
              label="Email"
              name="email"
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your address.",
                },
              ]}
              label="Address"
              name="address"
            >
              <Input placeholder="Enter your address" />
            </Form.Item>
            <Form.Item>
              <Checkbox defaultChecked disabled>
                Cash on Delivery
              </Checkbox>
            </Form.Item>
            <Paragraph type="secondary">More methods comming soon...</Paragraph>
            <Button type="primary" htmlType="submit">
              Confirm order
            </Button>
          </Space>
        </Form>
      </Drawer>
    </div>
  );
}
export default AppHeader;
