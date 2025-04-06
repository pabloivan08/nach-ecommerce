import { Link } from 'react-router-dom'

const ProductCard = ({ product, addToCart }) => (
  <div>
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} />
    </Link>
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <p>{product.category}</p>

    <button onClick={() => addToCart(product)}>
      Agregar al carrito 🛒
    </button>
  </div>
)


export { ProductCard }
