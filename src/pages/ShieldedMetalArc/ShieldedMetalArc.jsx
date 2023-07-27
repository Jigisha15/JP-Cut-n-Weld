import Page from '../../components/Page/Page'
import './ShieldedMetalArc.css'
import shield from '../../data/name'

const ShieldedMetalArc = () => {
  return (
    <div className="container">
      {shield.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default ShieldedMetalArc
