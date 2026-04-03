import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard/ProductCard"
function Products() {
  const [products, setProducts] = useState([])

  const URL = "https://dummyjson.com/products"
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(URL)
        console.log(response.data)
        setProducts(response.data.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    getProducts()
  }, [])


  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-5xl text-gray-800 text-center font-bold mb-6'>Products</h1>
      <p className='text-gray-600 text-center mb-6'>Here you can find a list of our products.</p>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
