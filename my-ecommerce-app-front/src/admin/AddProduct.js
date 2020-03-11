import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct } from "./apiAdmin";

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createProduct: "",
    redirectToProfile: false,
    formData: ""
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createProduct,
    redirectToProfile,
    formData
  } = values;

  const handleChange = name => event => {
    const value = 
  }

  const newPostForm = () => (
    <form className="mb-3">
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          ></input>
        </label>
      </div>

      <div classname="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div classname="form-group">
        <label className="text-muted">Description</label>
        <input
          onChange={handleChange("name")}
          className="form-control"
          value={description}
        />
      </div>

      <div classname="form-group">
        <label className="text-muted">Price</label>
        <input
          onChange={handleChange("name")}
          type="number"
          className="form-control"
          value={price}
        />
      </div>

      <div classname="form-group">
        <label className="text-muted">Category</label>
        <select onChange={handleChange("category")} className="form-control">
          <option value="5e68ed6b54d89c1716d61279">Pierogi</option>
        </select>
      </div>

      <div classname="form-group">
        <label className="text-muted">Shipping</label>
        <select onChange={handleChange("shipping")} className="form-control">
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>

      <div classname="form-group">
        <label className="text-muted">Quantity</label>
        <input
          onChange={handleChange("quantity")}
          type="number"
          className="form-control"
          value={quantity}
        />
      </div>

      <button className="btn btn-outline-primary">Create product</button>
    </form>
  );

  return (
    <Layout
      title="Add a new product"
      description={`G'day ${user.name}. Let's add a new product?`}
      className="container"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
      </div>
    </Layout>
  );
};

export default AddProduct;
