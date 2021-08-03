import Work from '../images/workgon.png'
import './styles/Workgon.css'

function Workgon() {
  return (
    <div className="Workgon">
      <h1 className="Workgon-info">Im working in this part...</h1>
      <img
        className="Workgon-img"
        src={Work}
        alt="I'm working in this part.."
      />
    </div>
  )
}

export default Workgon
