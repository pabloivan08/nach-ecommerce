import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './ProductDetails.css'

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams()
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`)

  if (loading) return <p>Cargando producto...</p>
  if (error) return <p>Error al cargar el producto: {error}</p>
  if (!product) return <p>Producto no encontrado</p>

  return (
    <div className='main-details-container'>
      <div className='details-container'>
        <div className='details-img'>
          <img
            src={product.image} 
            alt={product.title} 
          />
        </div>

        <div className='details-info-container'>
          <h1 className='product-title-details'>{product.title}</h1>
          <h3 className='category-deatails'>{product.category}</h3>
          <p>{product.description}</p>
          <p className='price-details'>${product.price} mxn</p>

          <button className='add-to-cart-details' onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export { ProductDetails }
