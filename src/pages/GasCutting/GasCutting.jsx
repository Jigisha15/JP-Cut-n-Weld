import Page from '../../components/Page/Page'
import gascutting from '../../data/gascutting'
import './GasCutting.css'

const GasCutting = () => {
  return (
    <div className="container">
      {gascutting.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default GasCutting
