import Page from '../../components/Page/Page'
import gasmetal from '../../data/gasmetal'
import './GasMetal.css'

const GasMetal = () => {
  return (
    <div className="container">
      {gasmetal.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default GasMetal
