import { useState } from 'react';
import { ProductCard } from './ProductCard';

const ProductList = ({ products, error, loading, addToCart }) => {

  const [selectedCategory, setSelectedCategory] = useState('')

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory
  ? products.filter(product => product.category === selectedCategory)
  : products

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div>
      <div>
        <button onClick={() => filterByCategory('')}>Todos</button>
        <button onClick={() => filterByCategory('electronics')}>Electrónica</button>
        <button onClick={() => filterByCategory("men's clothing")}>Ropa de Hombre</button>
        <button onClick={() => filterByCategory("women's clothing")}>Ropa de Mujer</button>
        <button onClick={() => filterByCategory('jewelery')}>Joyería</button>
      </div>
      { filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export { ProductList }
