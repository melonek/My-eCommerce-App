import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getProduct } from "./apiCore";

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
      {JSON.stringify(productByArrival)}
      <hr />
      {JSON.stringify(productBySell)}
    </Layout>
  );
};

export default Home;
