import { ProductContext } from "../context/clientContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export default function ProductList() {
    const {products}=useContext(ProductContext)
    console.log(products)

    return (
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
            {products.map((product) => (
                <div key={product._id} className="card text-black text-center bg-white max-w-82 max-h-92 shadow-sm">
                    <figure>
                        <img
                            src={product.Image}
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <div className="card-actions justify-end">
                         <h2 className="text-black font-bold m-auto text-xl">{product.price} DZD</h2>
                            <button className="btn btn-primary">
                                <Link to={`productDetais/${product._id}`} >Buy Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </ul>
    )
}
