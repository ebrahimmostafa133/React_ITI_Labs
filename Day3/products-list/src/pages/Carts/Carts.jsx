import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../Redux/Reducer/CounterSlice'
import { LanguageContext } from '../../Context/LanguageContext'

function Carts() {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const { language } = useContext(LanguageContext)

  const isArabic = language === 'ar'
  const isEmptyCart = cartItems.length === 0

  return (
    <div className={`container mx-auto py-8 ${isArabic ? 'text-right' : 'text-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <h1 className='text-3xl font-bold mb-6'>
        {isArabic ? 'سلة المشتريات' : 'Carts'}
      </h1>
      {isEmptyCart ? (
        <div className='rounded-lg border border-dashed border-gray-400 p-8 text-center text-gray-600'>
          {isArabic ? 'سلتك فارغة. أضف بعض المنتجات من صفحة المنتجات.' : 'Your cart is empty. Add some products from the Products page.'}
        </div>
      ) : (
        <div className='space-y-6'>
          {cartItems.map((item) => (
            <div key={item.id} className={`flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm md:flex-row md:items-center ${isArabic ? 'text-right' : 'text-left'}`}>
              <img src={item.images[0]} alt={item.title} className='h-32 w-32 rounded object-cover' />
              <div className='flex-1'>
                <h2 className='text-xl font-semibold'>{item.title}</h2>
                <p className='text-gray-600 mt-1'>{item.description}</p>
                <p className='mt-3 text-lg font-bold text-green-600'>${item.price.toFixed(2)}</p>
                <p className='text-gray-700'>{isArabic ? 'المجموع:' : 'Total:'} ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className={`flex flex-col gap-3 ${isArabic ? 'items-end' : 'items-start'}`}>
                <div className='flex items-center gap-2 rounded border border-gray-300 bg-gray-50 p-2'>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className='h-9 w-9 rounded bg-red-500 text-white hover:bg-red-600'
                  >
                    -
                  </button>
                  <span className='min-w-[2rem] text-center text-lg font-semibold'>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className='h-9 w-9 rounded bg-blue-500 text-white hover:bg-blue-600'
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className='rounded bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300'
                >
                  {isArabic ? 'إزالة' : 'Remove'}
                </button>
              </div>
            </div>
          ))}
          <div className={`rounded-lg border border-gray-200 bg-gray-50 p-6 text-right text-xl font-semibold`}>
            {isArabic ? 'إجمالي السلة:' : 'Cart total:'} <span className='text-green-700'>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carts
