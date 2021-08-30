import { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // needs a quantity, and product
  // when someone clicks cart we add the product to the cart provider
  const [cart, setcart] = useState([
    {
      id: 1,
      product: "Fake Game",
      quantity: 1,
      price: 33.33,
      image: "https://imgur.com/3CF1UhY.png",
    },
  ]);

  const findIfInCart = (product) => {
    return cart.find((cart) => {
      return cart.id === product.id;
    });
  };

  const addToCart = (product) => {
    // product obj has a name prop
    // we need a conditional if the product is already in cart do nothing? or increment
    const cartCheck = findIfInCart(product);
    if (cartCheck) {
      // means the product is already in the cart so we increment by 1
      //  another function that increments the quantity
    } else {
      // take the product arg and append quantity to it, the cartcheckout should be emtpy since it does not exist inthe cart
      const addQuantity = { ...product, quantity: 1 };
      setcart([...cart, addQuantity]);
    }
  };

  const incrementQuantity = (product) => {
    product.quantity++;
    const index = cart.findIndex((cart) => cart.id === product.id);
    cart.splice(index, 1, product);
    setcart([...cart]);
  };

  const decrementQuantity = (product) => {
    // if it goes to 0 we remove product
    product.quantity--;
    if (product.quantity === 0 || product.quantity < 0) {
      removeProduct(product.id);
    } else {
      // update the state
      const index = cart.findIndex((cart) => cart.id === product.id);
      // mutate cart using splice; start at index, remove 1, place product
      cart.splice(index, 1, product);
      setcart([...cart]);
    }
  };

  const removeProduct = (productid) => {
    const updatedCart = cart.filter((product) => {
      return product.id !== productid;
    });
    setcart(updatedCart);
  };

  const grandTotalPrice = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        removeProduct,
        decrementQuantity,
        grandTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
