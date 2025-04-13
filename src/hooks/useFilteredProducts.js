import { useMemo } from 'react'

const useFilteredProducts = (products, selectedCategory) => {
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products
    return products.filter(product => product.category === selectedCategory)
  }, [products, selectedCategory])

  return { filteredProducts }
}

export { useFilteredProducts }