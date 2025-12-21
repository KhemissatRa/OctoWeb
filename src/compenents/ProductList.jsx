import { ProductContext } from "../context/clientContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export default function ProductList() {
    const {products}=useContext(ProductContext)
    console.log(products)

    return (
     <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <li key={product._id} className="group">
      <div className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-sm">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.Image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3">

          {/* Title */}
          <h2 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h2>

          {/* Price */}
          <p className="text-lg font-bold text-indigo-600">
            {product.price} DZD
          </p>

          {/* Button */}
          <Link
            to={`productDetais/${product._id}`}
            className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300"
          >
                اشتري الان
           </Link>
        </div>

      </div>
    </li>
  ))}
</ul>

    )
}
