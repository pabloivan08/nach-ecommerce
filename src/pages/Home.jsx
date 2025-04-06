import { ProductList } from '../components/ProductList'
import { useFetch } from '../hooks/useFetch'

const Home = ({ addToCart }) => {

	const url = 'https://fakestoreapi.com/products'
  const { data: products, loading, error } = useFetch(url)

  return (
    <div className='home'>
      <h1>Home</h1>
      <ProductList 
        addToCart={addToCart}
        products={products} 
        loading={loading} 
        error={error}
      />
    </div>
  )
}

export { Home }