import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({ cartItems, clearCart, removeFromCart, addOneToCart, quantity }) => {

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return (
      <div className='empty-cart-container'>
        <h2 style={{ fontSize: '3rem', padding: '2rem 0' }}>Tu carrito está vacío.</h2>
        <Link to='/' style={{color: 'white'}}>
          <button>Volver al inicio</button>
        </Link>
      </div>
   )
  }

  return (
    <div className='main-cart-container'>
      {cartItems.map((item, index) => (

        <div key={index} className='cart-item-container'>
          <div>
            <h3 className='product-title-details'>{item.title}</h3>
            <p className='price'>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <div className='quantity-item-container'>
            <button className='quantity-button' onClick={() => removeFromCart(item.id)}>
              -
            </button>
            <p className='item-quantity-counter'>{item.quantity}</p>
            <button className='quantity-button' onClick={() => addOneToCart(item)}>
              +
            </button>
          </div>
        </div>
      ))}
      <div className='checkout-container'>
        <h4 className='total-products-counter'>Productos totales: {quantity}</h4>
        <h2 className='cart-price'>Total: ${total.toFixed(2)}</h2>

        <button 
          onClick={clearCart}
          disabled={cartItems.length === 0}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  )
}

export { Cart }
