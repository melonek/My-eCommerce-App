import React from "react";
import Layout from "../core/Layout";

const Signup = () => (
  <Layout title="Signup" description="Signup to Node React e-Commerce App">
    {process.env.REACT_APP_API_URL}
  </Layout>
);

export default Signup;
