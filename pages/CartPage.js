import React from "react";
import { useContext } from "react";
import { CartContext } from "../store/Cart";
import Image from "next/image";

// the cart info is gunna be coming from our context provider
const CartPage = () => {
  const {
    cart,
    incrementQuantity,
    removeProduct,
    decrementQuantity,
    grandTotalPrice,
  } = useContext(CartContext);
  console.log(cart);
  // show the products from context, can be multiple products so we need to do map function
  // carts = an array of objs

  const increment = (id) => {
    console.log(id);
    console.log(Number.isInteger(id));
    incrementQuantity(id);
  };
  return (
    <div>
      <h1>The Cart Page</h1>
      <div>
        <div className="flex justify-between font-bold border-b-2 border-gray-400 p-2">
          <div>NAME</div>
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>ACTIONS</div>
          <div>TOTAL PRICE</div>
        </div>
        {cart.length < 1 && (
          <div className="bg-red-300">Your cart is empty!!! </div>
        )}
        {cart.map((product) => {
          // can use grid layout here
          return (
            <div key={product.id}>
              <div className="flex justify-between items-center my-4">
                <Image
                  src={product.image}
                  width="80px"
                  height="120px"
                  objectFit
                  alt={product.product}
                  className="border-2 border-red-300"
                />
                <div>{product.product}</div>
                <div>{product.price}</div>
                <div>{product.quantity}</div>
                <div className="flex ">
                  <div
                    onClick={() => decrementQuantity(product)}
                    className="cursor-pointer mx-1 border border-black px-1"
                  >
                    -1
                  </div>
                  <div
                    onClick={() => increment(product)}
                    className="cursor-pointer mx-1 border border-black px-1"
                  >
                    +1
                  </div>
                  <div
                    onClick={() => removeProduct(product.id)}
                    className="cursor-pointer mx-1 border border-black px-1"
                  >
                    delete
                  </div>
                </div>
                <div>$ {product.quantity * product.price}</div>
              </div>
            </div>
          );
        })}
        <div className="text-center">
          {/* the reduce function goes here */}
          <p className="font-bold">Grand Total: $ {grandTotalPrice} </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
