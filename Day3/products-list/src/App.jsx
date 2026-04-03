import React from 'react'
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import ProductsDetails from './pages/ProductsDetails/ProductsDetails'
import Carts from './pages/Carts/Carts'
import NotFound from './pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products/Products'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductsDetails />} />
        <Route path='/carts' element={<Carts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
