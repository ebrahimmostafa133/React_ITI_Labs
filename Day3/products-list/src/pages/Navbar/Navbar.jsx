import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { LanguageContext } from '../../Context/LanguageContext'
import { AuthContext } from '../../Context/AuthContext'

function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const { language, setLanguage } = useContext(LanguageContext)
  const { user, logout } = useContext(AuthContext)

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center px-20'>
      <h1 className='text-2xl font-bold'>Products Store</h1>
      <ul className='flex items-center space-x-9'>
        <li>
          <Link to="/products" className='hover:text-gray-400'>Products</Link>
        </li>
        <li>
          <Link to="/contact" className='hover:text-gray-400'>Contact Us</Link>
        </li>
        {user ? (
          <>
            <li>
              <span className='text-gray-300'>Welcome, {user.name}</span>
            </li>
            <li>
              <button onClick={handleLogout} className='hover:text-gray-400'>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className='hover:text-gray-400'>Login</Link>
            </li>
            <li>
              <Link to="/register" className='hover:text-gray-400'>Register</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/carts" className='relative inline-flex items-center hover:text-gray-400'>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && (
              <span className='ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white'>
                {cartCount}
              </span>
            )}
          </Link>
        </li>
        <li>
          <button
            onClick={handleLanguageToggle}
            className='px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold'
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
