import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getProduct } from "./apiCore";
import Card from "./Card";

const Home = () => {
  const [productBySell, setProductBySell] = useState([]);
  const [productByArrival, setProductByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProduct("sold").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProduct("createdAt").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="Home Page" description="Node React e-Commerce App">
      <h2 className="mb-4">Best Sellers</h2>
      {loadProductsBySell.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </Layout>
  );
};

export default Home;
