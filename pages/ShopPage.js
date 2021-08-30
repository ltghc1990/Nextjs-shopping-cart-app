import React, { useState } from "react";

// smaller components
import ProductsList from "../components/products/ProductsList";
// home page routes here, depending on what they click we filter the products
const ShopPage = ({ products }) => {
  return <ProductsList products={products} />;
};

export default ShopPage;

export async function getStaticProps() {
  try {
    const fetchData = await fetch("http://localhost:3000/api/products", {
      method: "GET",
    });
    const products = await fetchData.json();
    console.log(products);
    return {
      props: {
        products: products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}
