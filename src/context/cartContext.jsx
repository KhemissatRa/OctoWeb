import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
const [cart,setCart]=useState([])
  const [count, setCount] = useState(1);

  const addToCart = (item) => {
      const isItemInCart = cart.find((cartItem) => cartItem.id === item.id); 
    
      if (isItemInCart) {
      setCart(
          cart.map((cartItem) => 
          cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
      );
      } else {
      setCart([...cart, { ...item, quantity: 1 }]); 
      }
    };
    const removeFromCart = (item) => {
      const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
    
      if (isItemInCart.quantity === 1) {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id)); 
      } else {
        setCart(
          cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 } 
              : cartItem
          )
        );
      }
    };
    const Increment =(e)=>{
      setCount(count+1)
      addToCart(e)
    }
    const Dicrement =(e)=>{
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));

      removeFromCart(e)
    }   
 
   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart,addToCart, totalPrice,removeFromCart ,count,Increment,Dicrement,setCart}}>
      {children}
    </CartContext.Provider>
  );
}


