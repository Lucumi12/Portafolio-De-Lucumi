//ESTILOS
import '../diseños/Styles.scss'


//IMG
import Brocoldevs from '../img/brochurecoldevs.png'


//CONTENIDO
const BrochureColDevs = () => {
return (
<>
  <div className='contenedor-imagen'>
    <div className='card-imagenes'>
      <h1 className='title-img'>BROCURE COLDEVS</h1>
      <img className='img-padding' src={Brocoldevs} width='100%'></img>
      <h2 className='img-description'>Diseño de un Brochure para Empresa <a className='img-link'
          href='https://colombiandevs.com' target='_blanck'>Colombiandevs.com</a></h2>
      <h3 className='img-hecha-con'>DISEÑADO CON:</h3>
      <div className='img-icons-lore'>
        <span><i className="fa-brands fa-figma figma-10-p"></i></span>
      </div>
    </div>
  </div>
</>
)
}

export default BrochureColDevs