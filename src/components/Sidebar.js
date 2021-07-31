import { Link } from 'react-router-dom'
import './styles/Sidebar.css'

function Sidebar() {
  const sidebarActive = (e) => {
    const sidebar = document.querySelector('.Sidebar')
    sidebar.classList.toggle('Sidebar--active')
  }

  return (
    <div className="Sidebar">
      <div className="Sidebar__content">
        <span className="Brand-logo">
          <i className="bx bxl-react"></i>
          Logo
        </span>
        <button onClick={sidebarActive} className="btn Sidebar-menu">
          <i className="bx bx-menu"></i>
        </button>
      </div>
      <ul className="Sidebar__list">
        <li className="Sidebar__item">
          <Link to="">
            <i className="bx bx-folder"></i>
            <span className="links-name">Portafolio</span>
          </Link>
          <span className="Sidebar__item-tooltip">Portafolio</span>
        </li>
        <li className="Sidebar__item">
          <Link to="">
            <i className="bx bx-meh-blank"></i>
            <span className="links-name">About</span>
          </Link>
          <span className="Sidebar__item-tooltip">About</span>
        </li>
        <li className="Sidebar__item">
          <Link to="">
            <i className="bx bx-download"></i>
            <span className="links-name">Download CV</span>
          </Link>
          <span className="Sidebar__item-tooltip">Download CV</span>
        </li>
        <li className="Sidebar__item">
          <Link target="_blank" to="">
            <i className="bx bxl-twitter"></i>
            <span className="links-name">Twitter</span>
          </Link>
          <span className="Sidebar__item-tooltip">Twitter</span>
        </li>
        <li className="Sidebar__item">
          <Link target="_blank" to="">
            <i className="bx bxl-github"></i>
            <span className="links-name">Github</span>
          </Link>
          <span className="Sidebar__item-tooltip">Github</span>
        </li>
        <li className="Sidebar__item">
          <Link target="_blank" to="">
            <i className="bx bxl-linkedin-square"></i>
            <span className="links-name">Linkedin</span>
          </Link>
          <span className="Sidebar__item-tooltip">Linkedin</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
