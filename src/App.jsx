import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NachContext } from './Context'
import { useContext } from 'react'
import { ProductDetails } from './pages/ProductDetails'
import { Navbar } from './components/NavBar'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

function App() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    addOneToCart,
    quantity
  } = useContext(NachContext)

  return (
    <>
      <Navbar cartCount={quantity} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              addOneToCart={addOneToCart}
              quantity={quantity}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
