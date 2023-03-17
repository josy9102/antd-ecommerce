import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, getAllProducts, getProductsByCategory } from "../../api";
import {
  List,
  Card,
  Image,
  Typography,
  Badge,
  Rate,
  Button,
  message,
  Spin,
  Select,
  Space,
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
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState<String>("");

  const { Text, Paragraph } = Typography;
  const { Ribbon } = Badge;

  const { categoryId } = useParams<{ categoryId?: string }>();

  useEffect(() => {
    setLoading(true);
    (categoryId ? getProductsByCategory(categoryId) : getAllProducts()).then(
      (res: any) => {
        console.log(res);
        setItems(res.products);
        setLoading(false);
      }
    );
  }, [categoryId]);

  const getSortedItems = () => {
    const sortedItems: any = [...items];

    sortedItems.sort(
      (
        a: { title: string; price: number },
        b: { title: string; price: number }
      ) => {
        const aLowerCaseTitle: string = a.title.toLowerCase();
        const bLowerCaseTitle: string = b.title.toLowerCase();

        if (sortOrder === "az") {
          return aLowerCaseTitle > bLowerCaseTitle
            ? 1
            : aLowerCaseTitle === bLowerCaseTitle
            ? 0
            : -1;
        } else if (sortOrder === "za") {
          return aLowerCaseTitle < bLowerCaseTitle
            ? 1
            : aLowerCaseTitle === bLowerCaseTitle
            ? 0
            : -1;
        } else if (sortOrder === "lowHigh") {
          return a?.price > b?.price ? 1 : a?.price === b?.price ? 0 : -1;
        } else if (sortOrder === "highLow") {
          return a?.price < b?.price ? 1 : a?.price === b?.price ? 0 : -1;
        }
      }
    );
    return sortedItems;
  };

  return (
    <Space direction="vertical">
      <Space>
        <Text>View Items Sorted By:</Text>
        <Select
          onChange={(value: string) => {
            setSortOrder(value);
            getSortedItems();
          }}
          defaultValue="az"
          style={{ width: "250px" }}
          options={[
            {
              label: "Alphabetically a-z",
              value: "az",
            },
            {
              label: "Alphabetically z-a",
              value: "za",
            },
            {
              label: "Price Low to High",
              value: "lowHigh",
            },
            {
              label: "Price High to Low",
              value: "highLow",
            },
          ]}
        ></Select>
      </Space>
      <List
        loading={loading}
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
                      {(
                        product?.price +
                        (product?.price * product?.discountPercentage) / 100
                      ).toFixed(2)}
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
        dataSource={getSortedItems()}
      ></List>
    </Space>
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
