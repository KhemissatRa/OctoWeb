import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import ClientContext from './context/clientContext'
import { CartProvider } from "./context/cartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
     <ClientContext>

    <App /></ClientContext>
</CartProvider>
  </React.StrictMode>
);

