import Sidebar from './Sidebar'
import './styles/Navbar.css'

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar__content">
        <span className="Brand-logo">
          <i className="bx bxl-react"></i>
          Logo
        </span>
      </div>
      <Sidebar />
    </nav>
  )
}

export default Navbar
