import { Link } from 'react-router-dom'
import './Pcard.css'

const Pcard = ({ name }) => {
  return (
    <Link className="pcard-container">
      <img
        src="https://www.warpp.co.in/images/pdf/shielded-metal-arc/photos/inarc-250-ih.jpg"
        className="card-image"
      />
      <h3>{name}</h3>
    </Link>
  )
}

export default Pcard
