import Navbar from '../components/Navbar'
import './styles/Landing.css'

function Landing() {
  return (
    <header className="Landing">
      <Navbar />
      <div className="Landing-info">
        <h1>Adrian Salgado</h1>
        <h2>Frontend Developer</h2>
        <a href="">See the latest proyects I have been roking on</a>
      </div>
    </header>
  )
}

export default Landing
