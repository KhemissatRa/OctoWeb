import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/clientContext'
import Category from '../compenents/Category'
import Fouter from '../compenents/Fouter'
import Timeline from '../compenents/Timeline'
import { CartContext } from '../context/cartContext'

export default function ProductDetais() {
  const { products } = useContext(ProductContext)
  const { cart, addToCart, Dicrement, Increment, count, setCount } = useContext(CartContext)
  const { id } = useParams()

  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const product = products.find((item) => item._id === id)

  const AddCart = (product) => {
    addToCart(product)
    setShowModal(true)
    setTimeout(() => setShowModal(false), 3000)
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
    if (product) Increment(product)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
      if (product) Dicrement(product)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <svg className="h-24 w-24 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-slate-700 mb-2">المنتج غير موجود</h2>
          <p className="text-slate-500 mb-4">عذراً، لم نتمكن من العثور على هذا المنتج</p>
          <Link to="/" className="btn btn-primary">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <Category />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm breadcrumbs mb-6">
            <ul className="text-slate-600">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/products">المنتجات</Link></li>
              <li className="text-blue-600 font-semibold">{product.title}</li>
            </ul>
          </div>

          {/* Product Card */}
          <div className="card lg:card-side bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
            {/* Image Section */}
            <figure className="lg:w-1/2 bg-slate-100 p-8 flex items-center justify-center">
              <img 
                src={product.Image} 
                alt={product.title}
                className="w-full h-auto max-h-96 object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </figure>

            {/* Content Section */}
            <div className="card-body lg:w-1/2 p-8 space-y-6">
              {/* Title & Badge */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                    {product.title}
                  </h1>
                  <div className="badge badge-success gap-2 p-3 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    جديد
                  </div>
                </div>

                {/* Category */}
                <div className="flex gap-2 flex-wrap">
                  <span className="badge badge-outline badge-lg font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {product.Category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-slate-50 rounded-xl p-4 border-r-4 border-blue-500">
                <h3 className="font-semibold text-slate-700 mb-2">وصف المنتج:</h3>
                <p className="text-slate-600 leading-relaxed">
                  {product.description || "لا يوجد وصف متاح لهذا المنتج"}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 text-white shadow-lg">
                <p className="text-sm opacity-90 mb-1">السعر</p>
                <p className="text-4xl font-bold">{product.price} دج</p>
              </div>

              {/* Quantity Selector */}
              <div className="bg-slate-50 rounded-xl p-4">
                <label className="block text-sm font-semibold text-slate-700 mb-3">الكمية:</label>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                    className="btn btn-circle bg-red-600 hover:btn-error  "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  
                  <div className="bg-white border-2 border-blue-500 rounded-lg px-8 py-3 min-w-[80px] text-center">
                    <span className="text-2xl font-bold text-blue-600">{count}</span>
                  </div>
                  
                  <button 
                    onClick={handleIncrement}
                    className="btn btn-circle bg-green-600 hover:btn-success transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <button 
                  onClick={() => AddCart(product)} 
                  className="btn bg-green-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  أضف إلى السلة
                </button>

                <Link to="/cart" className="btn btn-lg btn-outline btn-primary font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  عرض السلة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Timeline />
      <Fouter />

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 transform transition-all animate-bounce-in">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-4">
                <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-center mb-3 text-green-800">
              تمت الإضافة بنجاح! 🎉
            </h3>

            {/* Message */}
            <p className="text-slate-600 text-center mb-6 leading-relaxed">
              تم إضافة المنتج إلى سلة التسوق بنجاح
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-outline flex-1 rounded-lg font-bold"
              >
                متابعة التسوق
              </button>
              <Link
                to="/cart"
                className="btn btn-success flex-1 rounded-lg font-bold text-white"
              >
                عرض السلة
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}