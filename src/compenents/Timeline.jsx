import React from 'react'

export default function Timeline() {
const   counter = 200
  return (
    <div className="w-full flex flex-col items-center py-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-sm">
  <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 tracking-wide">
    <span className="text-indigo-600 italic">Up to 30% Off</span> On All Products 🎉
  </h1>

  <div className="grid grid-flow-col gap-4 text-center auto-cols-max">
    <div className="flex flex-col items-center px-4 py-2 bg-gray-900 rounded-xl text-white">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": 15 }}></span>
      </span>
      <span className="text-xs mt-1 tracking-wide uppercase">Days</span>
    </div>

    <div className="flex flex-col items-center px-4 py-2 bg-gray-900 rounded-xl text-white">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": 10 }}></span>
      </span>
      <span className="text-xs mt-1 tracking-wide uppercase">Hours</span>
    </div>

    <div className="flex flex-col items-center px-4 py-2 bg-gray-900 rounded-xl text-white">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": 24 }}></span>
      </span>
      <span className="text-xs mt-1 tracking-wide uppercase">Min</span>
    </div>

    <div className="flex flex-col items-center px-4 py-2 bg-gray-900 rounded-xl text-white">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": 59 }}></span>
      </span>
      <span className="text-xs mt-1 tracking-wide uppercase">Sec</span>
    </div>
  </div>
</div>

  )
}
