import Sidebar from './Sidebar'
import './styles/Layout.css'

function Layout({ children }) {
  return (
    <>
      <header className="Navbar">
        <nav className="Navbar__content">
          <span className="Brand-logo">
            <i className="bx bxl-react"></i>
            Logo
          </span>
        </nav>
        <Sidebar />
      </header>
      {children}
      <footer className="Footer">
        <span>
          Made with <i className="bx bxs-heart"></i>
        </span>
        <span>&copy; Adrian Salgado</span>
      </footer>
    </>
  )
}

export default Layout
