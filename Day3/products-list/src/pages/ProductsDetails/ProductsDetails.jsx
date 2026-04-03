import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons'
function ProductsDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const URL = `https://dummyjson.com/products/${id}`
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(URL)
        setProduct(response.data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    fetchProduct()
  }, [id])

  return (
    <div className='container mx-auto py-17'>
      {product ? (
        <div className='bg-white rounded-lg shadow-md overflow-hidden p-6'>
          <div className='flex flex-col md:flex-row'>
            <img src={product.images[0]} alt={product.title} className='w-full md:w-1/2 h-auto border-2 border-red-400 object-cover rounded-lg' />
            <div className='md:ml-6 mt-4 md:mt-0'>
              <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
              <p className='text-gray-600 mb-4'>{product.description}</p>
              <p className='text-green-600 font-bold text-xl mb-4'>${product.price.toFixed(2)}</p>
              <div className='flex items-center space-x-4 mb-4'>
                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                <span className='text-gray-600'>{product.rating}</span>
              </div>
              <div className='flex space-x-4'>
                <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center space-x-2'>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  )
}
export default ProductsDetails
