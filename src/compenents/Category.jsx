import React from 'react'

export default function Category() {
  return (
    <div className='flex flex-col  text-center items-center '>
<h1 className="text-[#1D232A] text-xl  sm:text-3xl p-4 font-bold  leading-tight text-center">
  تصفح كامل {" "}
  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
    الاقسام
  </span>{" "}
  واحصل على{" "}
  <span className="text-yellow-500 drop-shadow font-black">
    20% خصم
  </span>
</h1>
<div className="carousel carousel-center  bg-neutral rounded-box max-w-full space-x-4 p-4">
  <div className=" carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="rounded-box" />
  </div>
</div></div>  )
}
