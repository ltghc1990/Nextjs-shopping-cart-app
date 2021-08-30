import React, { useContext, useState } from "react";
import Image from "next/image";

import { CartContext } from "../../../store/Cart";
const ProductDetailPage = ({ product }) => {
  // the function should exist in the global state?
  const { cart, addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const onClickHandler = () => {
    addToCart(product);
    // add to global state
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  return (
    <div>
      <h1>Product Detail page</h1>
      {showMessage && (
        <div className="p-2 bg-green-400">Product Added to Cart!!!</div>
      )}
      <div>
        <h2>{product.product}</h2>
        <Image
          src={product.image}
          width="400"
          height="600"
          objectFit="cover"
          alt={product.product}
        />
        <p>{product.price}</p>
        <button onClick={onClickHandler} className="rounded-md p-2 bg-blue-400">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const { query } = context;

  // make a fech request since someone can bookmark the url and it only fetchs on the previous page
  const req = await fetch(`http://localhost:3000/api/products/all/id`, {
    method: "POST",
    body: JSON.stringify({
      query: query,
    }),
  });

  const product = await req.json();

  console.log(product);

  return {
    props: {
      product,
    },
  };
}
