import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams()
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`)

  if (loading) return <p>Cargando producto...</p>
  if (error) return <p>Error al cargar el producto: {error}</p>
  if (!product) return <p>Producto no encontrado</p>

  return (
    <div>
      <div>
        <img 
          src={product.image} 
          alt={product.title} 
        />

        <div style={{ flex: 1 }}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>

          <button 
            onClick={() => addToCart(product)}
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export { ProductDetails }
