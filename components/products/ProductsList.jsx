import React from "react";
import Product from "./Product";
const ProductsList = ({ products }) => {
  return (
    <ul className="flex flex-wrap border-4 border-black items-center justify-center">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductsList;
