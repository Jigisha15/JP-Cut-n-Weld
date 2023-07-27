import Page from '../../components/Page/Page'
import cncgasplasma from '../../data/cncgasplasma'
import './CncGasPlasma.css'

const CncGasPlasma = () => {
  return (
    <div className="container">
      {cncgasplasma.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default CncGasPlasma
