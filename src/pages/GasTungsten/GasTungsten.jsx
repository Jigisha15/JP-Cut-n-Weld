import Page from '../../components/Page/Page'
import gastungsten from '../../data/gastungsten'
import './GasTungsten.css'

const GasTungsten = () => {
  return (
    <div className="container">
      {gastungsten.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default GasTungsten
