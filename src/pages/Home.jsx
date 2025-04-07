import { ProductList } from '../components/ProductList'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

const Home = ({ addToCart }) => {

	const url = 'https://fakestoreapi.com/products'
  const { data: products, loading, error } = useFetch(url)

  return (
    <div className='home'>
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