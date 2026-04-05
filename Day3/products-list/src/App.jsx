import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import ProductsDetails from './pages/ProductsDetails/ProductsDetails'
import Carts from './pages/Carts/Carts'
import NotFound from './pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products/Products'
import Login from './pages/auth/Login/Login'
import ContactUs from './pages/Contact/ContactUs'
import Register from './pages/auth/Register/Register'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path='/products/:id' element={<ProtectedRoute><ProductsDetails /></ProtectedRoute>} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/carts' element={<ProtectedRoute><Carts /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
