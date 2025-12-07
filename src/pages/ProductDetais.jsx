import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/clientContext'
import Category from '../compenents/Category'
import Fouter from '../compenents/Fouter'
import Timeline from '../compenents/Timeline'
import { CartContext } from '../context/cartContext'
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetais() {
  const { products } = useContext(ProductContext)
  const { cart, addToCart, Dicrement, Increment, count,setCount } = useContext(CartContext)

  const { id } = useParams()
const AddCart =(params)=>{
  addToCart(params)
      toast.success("🎉 Order placed successfully! Thank you for your purchase.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
        
}
  const product = products.find((item) => item._id === id)

  if (!product) return <h2>Product not found...</h2>

  return (
    <div className="bg-[#DDE0ED] bg-white flex justify-center items-center flex-col space-y-8">
      <Category />
      <Timeline />

      <div className="card bg-white p-4 w-full max-w-sm text-black shadow-sm">
        <figure>
          <img src={product.Image} alt={product.title} />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {product.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>{product.description}</p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.Category}</div>
            <div className="badge badge-outline">{product.Category}</div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 items-center justify-center">
          <button onClick={() => AddCart(product)} className="btn text-primary btn-wide">
            <Link to="/cart">Buy Now</Link>
          </button>

          <div className="flex items-center space-x-2">
            <button onClick={() => Dicrement(product)} className="btn btn-xs">-</button>
            <div className="badge badge-info">{count}</div>
            <button onClick={() => Increment(product)}  className="btn btn-xs">+</button>
          </div>

        </div>
      </div>

    </div>
  )
}