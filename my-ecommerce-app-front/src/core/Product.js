import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read } from "./apiCore";
import Card from "./Card";

const Product = props => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  const loadSingleProduct = productId => {
    read(productId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, []);

  return (
    <Layout
      title="FullStack React Node MongoDB Ecommerce App"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <p className="mb-4">Single Product</p>
      <div className="row">{JSON.stringify(product)}</div>
    </Layout>
  );
};

export default Product;
