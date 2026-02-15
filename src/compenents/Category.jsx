import React from 'react'

export default function Category() {
  return (
<div>
<h1 className="text-[#1D232A] text-2xl sm:text-4xl md:text-5xl px-4 py-4 font-bold leading-tight text-center">


  <span className="inline-block px-4 py-2 bg-black text-white rounded-lg font-black text-3xl sm:text-4xl shadow-lg">
   Hello with us <span className='text-blue-800'>OctoWeb</span>
  </span>
</h1>
<div className="carousel carousel-center h-92 bg-neutral rounded-box  space-x-4 p-2">

  <div className=" carousel-item">
    <img
      src="/Gaming PC Essentials — High-Performance Desktops for Smooth Gameplay & Streaming.jpg"
      className="rounded-box " />
  </div>
  <div className="carousel-item">
    <img
      src="/Microsoft Surface Laptop 3 - An Awesome Travel Laptop.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="/image.jpg"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="sony wh1000xm4 headphones _ best headphones.jpg"
      className="rounded-box " />
  </div>
  <div className="carousel-item">
    <img
      src="/TikTok - Make Your Day.jpg"
      className="rounded-box " />
  </div>

  <div className="carousel-item">
    <img
      src="/Microsoft Surface Laptop 3 - An Awesome Travel Laptop.jpg"

      className="rounded-box " />
  </div>
</div></div>  )
}
