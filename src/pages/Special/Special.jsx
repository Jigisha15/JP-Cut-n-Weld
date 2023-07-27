import Page from '../../components/Page/Page'
import special from '../../data/special'

const Special = () => {
  return (
    <div className="container">
      {special.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default Special
