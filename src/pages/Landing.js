import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './styles/Landing.css'

function Landing() {
  return (
    <header className="Landing">
      <Navbar />
      <div className="Landing-info">
        <h1 className="title">Adrian Salgado</h1>
        <h2 className="subtitle">
          <span className="subtitle--imp">F</span>rontend
          <span className="subtitle--imp"> D</span>eveloper
        </h2>
        <Link to="" className="btn btn--link">
          See my latest proyects
        </Link>
      </div>
    </header>
  )
}

export default Landing
