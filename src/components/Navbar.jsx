import { Link } from 'react-router-dom'

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
          Carrito 🛒 ({cartCount})
        </Link>
      </div>
    </nav>
  )
}

export { Navbar }
