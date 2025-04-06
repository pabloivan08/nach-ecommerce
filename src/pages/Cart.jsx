import { Link } from 'react-router-dom'

const Cart = ({ cartItems, clearCart, removeFromCart, addOneToCart, quantity }) => {

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Carrito</h1>
        <p style={{ textAlign: 'center' }}>Tu carrito está vacío.</p>
        <button>
          <Link to='/'>Volver al inicio</Link>
        </button>
      </div>
   )
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Carrito</h1>
      {cartItems.map((item, index) => (

        <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <h3>{item.title}</h3>
          <p>${item.price.toFixed(2)}</p>
          <div>
            <button onClick={() => removeFromCart(item.id)}>
              -
            </button>
            <p>{item.quantity}</p>
            <button onClick={() => addOneToCart(item)}>
              +
            </button>
          </div>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <h4>Productos totales {quantity}</h4>
      <h2>Total: ${total.toFixed(2)}</h2>

      <button 
        onClick={clearCart}
        disabled={cartItems.length === 0}
      >
        Vaciar carrito
      </button>
    </div>
  )
}

export { Cart }
