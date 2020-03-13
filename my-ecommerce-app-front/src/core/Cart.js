import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts, getProduct } from "./apiCore";
import Card from "./Card";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getCart());
  }, []);
};
