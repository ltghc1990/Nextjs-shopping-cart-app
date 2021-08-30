import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Product = ({ product }) => {
  const router = useRouter();

  // push them the to product detail page
  const onClickHandler = () => {
    router.push(`/category/all/${product.id}`);
  };

  return (
    <div
      className="border-4 border-black-400 cursor-pointer"
      onClick={onClickHandler}
    >
      <div className="">
        <Image
          src={product.image}
          alt={product.product}
          width="260px"
          height="300px"
          className="object-contain "
        />
      </div>
      <div className="border border-black">
        <h3>{product.product}</h3>
        <p>{`$${product.price}`}</p>
      </div>
    </div>
  );
};

export default Product;
