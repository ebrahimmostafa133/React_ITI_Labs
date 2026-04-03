import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center px-20'>
      <h1 className='text-2xl font-bold'>Products Store</h1>
      <ul className='flex space-x-9'>
        <li><Link to="/products" className='hover:text-gray-400'>Products</Link></li>
        <li><Link to="/carts" className='hover:text-gray-400'>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
