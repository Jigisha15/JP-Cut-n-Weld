import Page from '../../components/Page/Page'
import arcwelding from '../../data/arcwelding'
import './ArcWelding.css'

const ArcWelding = () => {
  return (
    <div className="container">
      {arcwelding.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default ArcWelding
