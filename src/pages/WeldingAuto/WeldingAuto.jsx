import Page from '../../components/Page/Page'
import weldingauto from '../../data/weldingauto'
import './WeldingAuto.css'

const WeldingAuto = () => {
  return (
    <div className="container">
      {weldingauto.map((items) => (
        <div className="shielded">
          <Page name={items.name} />
        </div>
      ))}
    </div>
  )
}

export default WeldingAuto
