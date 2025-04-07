import { useState, useMemo } from 'react'
import { ProductCard } from '../ProductCard'
import { CategoryFilter } from '../CategoryFilter'
import './ProductList.css'

const ProductList = ({ products, error, loading, addToCart }) => {

  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = useMemo(() => {
    if (!products || !Array.isArray(products)) return []
    const allCategories = products.map(p => p.category)
    return [...new Set(allCategories)]
  }, [products])

  const filteredProducts = selectedCategory
  ? products.filter(product => product.category === selectedCategory)
  : products

  if (loading) {
    return (
      <div style={{display: 'flex', justifyContent: 'center', padding:'50px'}}>
        <h2 className='loading' style={{fontSize: '4rem'}}>Loading...</h2>
      </div>
    )
  }
  if (error) return <p>Error: {error}</p>
  if (!products || products.length === 0) return <p>No hay productos disponibles.</p>

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className='products-grid'>
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export { ProductList }
