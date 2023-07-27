import Page from '../../components/Page/Page'
import plasmacutting from '../../data/plasmacutting'
import './PlasmaCutting.css'

const PlasmaCutting = () => {
  return (
    <div className="container">
      {plasmacutting.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default PlasmaCutting
