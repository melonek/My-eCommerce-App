import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";

const Shop = () => {
  return (
    <Layout
      title="FullStack React Node MongoDB Ecommerce App"
      description="Node React E-commerce App"
      className="container-fluid"
    >
      <div className="row>">
        <div className="col-4">left sidebar</div>
        <div className="col-8">right sidebar</div>
      </div>
    </Layout>
  );
};

export default Shop;
