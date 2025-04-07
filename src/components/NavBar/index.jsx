import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <Link to="/" className='nach-logo link-format'>NACH STORE</Link>
      <div>
        <Link to="/cart" className='link-format'>
          <div className='cart--icon-container' style={{ 
            color: cartCount ? 'rgb(57, 105, 167)' : '#2c2c2c',
            backgroundColor: cartCount ? 'rgb(224, 237, 255)' : '',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" > <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /> <path d="M17 17h-11v-14h-2" /> <path d="M6 5l14 1l-1 7h-13" /> </svg>
            <h4 style={{fontSize: '1.4rem'}}>
              {cartCount}
            </h4>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export { Navbar }
