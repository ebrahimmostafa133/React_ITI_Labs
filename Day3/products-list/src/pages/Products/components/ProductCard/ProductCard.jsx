import { Link } from "react-router-dom"

function ProductCard({ product }) {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-green-600 font-bold text-lg">${product.price.toFixed(2)}</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link to={`/products/${product.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </Link>
          <button className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
