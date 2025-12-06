import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export default function ClientContext({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://backendoctoweb.onrender.com/product/");
  
    console.log(res)
      setProducts(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
useEffect(()=>{
    fetchProduct()
},[])
  return (
    <ProductContext.Provider value={{ fetchProduct, products, error, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
