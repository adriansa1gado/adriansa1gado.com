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
        <Link to="/" className="Brand-logo">
          <i className="bx bxl-react"></i>
          Logo
        </Link>
        <button onClick={sidebarActive} className="btn Sidebar-menu">
          <i className="bx bx-menu"></i>
        </button>
      </div>
      <ul className="Sidebar__list">
        <li className="Sidebar__item">
          <Link to="/portfolio">
            <i className="bx bx-folder"></i>
            <span className="links-name">Portafolio</span>
          </Link>
          <span className="Sidebar__item-tooltip">Portafolio</span>
        </li>
        <li className="Sidebar__item">
          <Link to="/about">
            <i className="bx bx-meh-blank"></i>
            <span className="links-name">About</span>
          </Link>
          <span className="Sidebar__item-tooltip">About</span>
        </li>
        <li className="Sidebar__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1_GD7tkVTvec1SJ9xkN5xBUPaQ_se6eIy/view?usp=sharing"
          >
            <i className="bx bx-download"></i>
            <span className="links-name">Download CV</span>
          </a>
          <span className="Sidebar__item-tooltip">Download CV</span>
        </li>
        <li className="Sidebar__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/adriansa1gado"
          >
            <i className="bx bxl-twitter"></i>
            <span className="links-name">Twitter</span>
          </a>
          <span className="Sidebar__item-tooltip">Twitter</span>
        </li>
        <li className="Sidebar__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/adriansa1gado"
          >
            <i className="bx bxl-github"></i>
            <span className="links-name">Github</span>
          </a>
          <span className="Sidebar__item-tooltip">Github</span>
        </li>
        <li className="Sidebar__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/droxander/"
          >
            <i className="bx bxl-linkedin-square"></i>
            <span className="links-name">Linkedin</span>
          </a>
          <span className="Sidebar__item-tooltip">Linkedin</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
