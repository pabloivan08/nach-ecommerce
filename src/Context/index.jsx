import { createContext, useState } from "react"

const NachContext = createContext()

const NachProvider = ({ children }) => {
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

  const clearCart = () => {
    setCartItems([])
    setQuantity(0)
  }

  return (
    <NachContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      quantity,
      addOneToCart
    }}>
      {children}
    </NachContext.Provider>
  )
}

export { NachProvider, NachContext }