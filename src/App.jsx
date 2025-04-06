import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(0)

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id)
  
    if (existingProduct) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCartItems(updatedCart)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    setQuantity(quantity + 1)
  }

  const addOneToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id)
  
    if (existingProduct) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCartItems(updatedCart)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    setQuantity(quantity + 1)
  }

  const removeFromCart = (id) => {
    const updatedCart = cartItems
      .map(item => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return null
          }
        }
        return item
      })
      .filter(Boolean)
    
    setCartItems(updatedCart)
    setQuantity(quantity - 1)
  }

  const clearCart = () => {
    setCartItems([])
    setQuantity(0)
  }

  return (
    <>
      <Navbar cartCount={quantity} />
      <Routes>
        <Route path="/" element={
          <Home 
            addToCart={addToCart}
          />}
        />

        <Route path="/product/:id" element={
          <ProductDetails 
            addToCart={addToCart} 
          />}
        />

        <Route path="/cart" element={
          <Cart 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            addOneToCart={addOneToCart}
            quantity={quantity}
          />
        }/>
      </Routes>
    </>
  )
}

export default App
