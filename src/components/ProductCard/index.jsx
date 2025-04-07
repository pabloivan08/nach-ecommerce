import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product, addToCart }) => (
  <div>
    <Link to={`/product/${product.id}`} className='image-wrapper'>
      <img src={product.image} alt={product.title} />
    </Link>
    <div className='info-container'>
      <h3 className='product-title'>{product.title}</h3>
      <p className='price'>MXN {product.price}</p>
      <button className='add-to-cart-button' onClick={() => addToCart(product)}>
        AGREGAR AL CARRITO
      </button>

    </div>
  </div>
)

export { ProductCard }