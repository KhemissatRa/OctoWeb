import React, { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import axios from 'axios'
import Category from '../compenents/Category'
import Timeline from '../compenents/Timeline'
import Fouter from '../compenents/Fouter'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Checkout() {
  const { totalPrice, cart } = useContext(CartContext)

  // ✅ Only store user info in state (NOT orders)
  const [order, setOrder] = useState({
    name: "",
    willaya: "",
    city: "",
    Number: ""
  })

  // ✅ Handle form input
  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    })
  }

  // ✅ Always build orders from cart
  const buildOrders = () =>
    cart.map(({ title, quantity }) => ({ title, quantity }))

  // ✅ Submit order safely
  const handleValidate = async (e) => {
    e.preventDefault()

    if (!cart.length) {
      toast.error("🛒 Your cart is empty!")
      return
    }

    const finalOrder = {
      order: buildOrders(), // ✅ ALWAYS ARRAY
      name: order.name,
      willaya: order.willaya,
      city: order.city,
      email: "admin@email.com",
      Number: order.Number,
      totalPrice,
      Done: false
    }

    try {
      await axios.post("https://backendoctoweb.onrender.com/order/", finalOrder)

      toast.success("🎉 Order placed successfully!", {
        position: "top-right",
        autoClose: 3000
      })

    } catch (err) {
      console.error(err)
      toast.error("😕 Failed to send order.", {
        position: "top-right",
        autoClose: 4000
      })
    }
  }

  return (
    <>
      <Category />

      <form
        onSubmit={handleValidate}
        className="w-full flex bg-white justify-center h-full items-center py-6"
      >
        <fieldset className="w-92 bg-slate-950 shadow-lg rounded-xl min-h-full border border-base-300 p-8 space-y-4">
          <legend className="text-xl text-blue-600 font-bold text-center mb-2">
            Checkout
          </legend>

          {/* Name */}
          <div className="form-control text-gray-200 space-y-1">
            <label className="label text-sm font-medium">الاسم الكامل</label>
            <input
              name="name"
              required
              onChange={handleChange}
              type="text"
              className="input input-neutral  bg-gray-200 text-black w-full rounded-lg"
              placeholder="Enter your name"
            />
          </div>



          {/* Phone */}
          <div className="form-control space-y-1">
            <label className="label text-sm text-gray-200 font-medium">رقم الهاتف</label>
            <input
              name="Number"
              required
              onChange={handleChange}
              type="text"
              className="input input-neutral bg-gray-200 text-black w-full rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Wilaya */}
          <div className="form-control space-y-1">
            <label className="label text-sm text-gray-200 font-medium">الولاية</label>
            <input
              name="willaya"
              required
              onChange={handleChange}
              type="text"
              className="input input-neutral bg-gray-200 text-black w-full rounded-lg"
              placeholder="Enter your Willaya"
            />
          </div>

          {/* City */}
          <div className="form-control space-y-1">
            <label className="label text-sm text-gray-200 font-medium">المدينة</label>
            <input
              name="city"
              required
              onChange={handleChange}
              type="text"
              className="input input-neutral bg-gray-200 text-black w-full rounded-lg"
              placeholder="Enter your City"
            />
          </div>

          {/* Total */}
          <h1 className="text-lg font-semibold text-white text-center pt-2">
            :المجموع {totalPrice} DA
          </h1>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-neutral bg-green-600 w-full rounded-lg font-semibold"
          >
اكد الطلبية          </button>
        </fieldset>
      </form>

      <Timeline />
      <Fouter />

      {/* ✅ Toast must be rendered ONCE */}
      <ToastContainer />
    </>
  )
}
