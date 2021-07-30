import './styles/Navbar.css'

function Navbar() {
  return (
    <nav className="Navbar">
      <img className="Navbar-logo" src="" alt="Brannd Logo" />
      <ul className="Navbar__list">
        <li className="Navbar__item">
          <a href="">Portafolio</a>
        </li>
        <li className="Navbar__item">
          <a href="">About</a>
        </li>
        <li className="Navbar__item">
          <a href="">Download CV</a>
        </li>
        <li className="Navbar__item">
          <a target="_blank" href="">
            Twitter
          </a>
        </li>
        <li className="Navbar__item">
          <a target="_blank" href="">
            Github
          </a>
        </li>
        <li className="Navbar__item">
          <a target="_blank" href="">
            Linkedind
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
