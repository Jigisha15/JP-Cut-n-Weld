import Pcard from '../Pcard/Pcard'
import names from '../../data/name'
import './Page.css'

const Page = () => {
  return (
    <div className="products">
      {names.map((items, id) => (
        <div key={id}>
          <Pcard name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default Page
