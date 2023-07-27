import Pcard from '../Pcard/Pcard'
import './Page.css'

const Page = ({ name }) => {
  return (
    <div className="products">
      <Pcard name={name} />
    </div>
  )
}

export default Page
