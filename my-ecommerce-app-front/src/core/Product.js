import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getProduct } from "./apiCore";
import Card from "./Card";

const Product = () => {
  return (
    <Layout
      title="FullStack React Node MongoDB Ecommerce App"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <p>product page</p>
    </Layout>
  );
};

export default Product;
