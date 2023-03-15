import React, { useEffect, useState } from "react";
import { addToCart, getAllProducts } from "../../api";
import {
  List,
  Card,
  Image,
  Typography,
  Badge,
  Rate,
  Button,
  message,
} from "antd";

import i18next from "i18next";

interface ProductProps {
  id: number;
  title: string;
  discountPercentage: number;
  thumbnail: string;
  rating: number;
  price: number;
  description: string;
  category: string;
  images: [];
}

const Products = () => {
  const [items, setItems] = useState<[]>([]);

  const { Text, Paragraph } = Typography;
  const { Ribbon } = Badge;

  useEffect(() => {
    getAllProducts().then((res: any) => {
      console.log(res);
      setItems(res.products);
    });
  }, []);

  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product: ProductProps, i) => (
          <Ribbon
            className="margin-sm"
            text={`${product?.discountPercentage}% OFF`}
            color="pink"
          >
            <Card
              className="margin-sm"
              title={product?.title}
              key={i}
              cover={
                <Image className="itemCardImage" src={product?.thumbnail} />
              }
              actions={[
                <Rate allowHalf value={product?.rating} disabled />,
                <AddToCartButton {...product} />,
              ]}
            >
              <Card.Meta
                title={
                  <Paragraph>
                    Price: {product?.price}€{" "}
                    <Text delete type="danger">
                      {product?.price +
                        (product?.price * product?.discountPercentage) / 100}
                      €
                    </Text>
                  </Paragraph>
                }
                description={
                  <Paragraph
                    ellipsis={{
                      rows: 2,
                      expandable: true,
                      symbol: i18next.t("more"),
                    }}
                  >
                    {product?.description}
                  </Paragraph>
                }
              ></Card.Meta>
            </Card>
          </Ribbon>
        )}
        dataSource={items}
      ></List>
    </div>
  );
};

function AddToCartButton(product: ProductProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const addProductToCart = () => {
    setLoading(true);
    addToCart(product?.id).then((res) => {
      message.success(
        `${product?.title} has been successfully added to your cart.`
      );
      setLoading(false);
    });
  };
  return (
    <Button type="link" onClick={() => addProductToCart()} loading={loading}>
      Add to Cart
    </Button>
  );
}

export default Products;
