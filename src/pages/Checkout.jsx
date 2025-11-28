import React, { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import axios from 'axios'
import Category from '../compenents/Category'
import Timeline from '../compenents/Timeline'
import Fouter from '../compenents/Fouter'
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export default function Checkout() {
  const { totalPrice, cart } = useContext(CartContext)
const titles = cart.map(item => item.title);

  const [order, setOrder] = useState({
    order: titles, // send all cart items
    name: "",
    email: "",
    willaya: "",
    city: "",
    Number: "",
    totalPrice: totalPrice,
    Done: false
  });

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  };
  const handleValidate = async (e) => {
    e.preventDefault(); // ✅ prevent page reload

    try {
      await axios.post("https://backendoctoweb.onrender.com/order/", order);
      console.log("Order sent!");
      toast.success("🎉 Order placed successfully! Thank you for your purchase.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    } catch (err) {
      console.log(err);
      toast.error("😕 Oops! Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    }
    }

  
  
    

  return (
<>
    <Category/>
       <form  
  onSubmit={handleValidate} 
  className="w-full flex bg-white justify-center h-full items-center py-6"
>
  <fieldset className="w-92 bg-base-100 shadow-lg rounded-xl min-h-full border border-base-300 p-8 space-y-4">
    <legend className="text-xl text-blue-600 font-bold text-center mb-2">Checkout</legend>

    {/* Name */}
    <div className="form-control space-y-1">
      <label className="label text-sm font-medium">Full Name</label>
      <input  
        name="name"
        type="text"
        onChange={handleChange}
        placeholder="Enter your name"
        className="input  input-neutral w-full rounded-lg"
      />
    </div>

    {/* Email */}
    <div className="form-control space-y-1">
      <label className="label text-sm font-medium">Email</label>
      <input
        name="email"
        type="email"
        className="input input-neutral w-full rounded-lg"
        onChange={handleChange}
        placeholder="Enter your email"
      />
    </div>

    {/* Phone */}
    <div className="form-control space-y-1">
      <label className="label text-sm font-medium">Phone Number</label>
      <input
        name="Number"
        type="text"
        className="input input-neutral w-full rounded-lg"
        onChange={handleChange}
        placeholder="Enter your phone number"
      />
    </div>

    {/* Wilaya */}
    <div className="form-control space-y-1">
      <label className="label text-sm font-medium">Wilaya</label>
      <select
        name="willaya"
        onChange={handleChange}
        className="select select-neutral w-full rounded-lg"
      >
        <option disabled selected>Select Wilaya</option>
        <option>Algiers</option>
        <option>Oran</option>
        <option>Setif</option>
      </select>
    </div>

    {/* City */}
    <div className="form-control space-y-1">
      <label className="label text-sm font-medium">City</label>
      <select
        name="city"
        onChange={handleChange}
        className="select select-neutral w-full rounded-lg"
      >
        <option disabled selected>Select City</option>
        <option>Bab Ezzouar</option>
        <option>Bir El Djir</option>
        <option>Downtown</option>
      </select>
    </div>

    {/* Total */}
    <h1 className="text-lg font-semibold text-center pt-2">
      Total: {totalPrice} DA
    </h1>

    {/* Submit */}
    <button
      type="submit" 
      className="btn btn-neutral w-full rounded-lg font-semibold"
    >
      Confirm Order
    </button>
            <ToastContainer />

  </fieldset>
        
</form>
    <Timeline/>
  
     <Fouter/>
</>

  );
}
