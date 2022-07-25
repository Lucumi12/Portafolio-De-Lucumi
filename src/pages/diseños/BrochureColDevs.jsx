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
      <img className='img-padding' src={Brocoldevs} width='100%' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-coldevs"></img>
      <h2 className='img-description'>Diseño de un Brochure para Empresa <a className='img-link'
          href='https://colombiandevs.com' target='_blanck'>Colombiandevs.com</a></h2>
      <h3 className='img-hecha-con'>DISEÑADO CON:</h3>
      <div className='img-icons-lore'>
        <span><i className="fa-brands fa-figma figma-10-p"></i></span>
      </div>
    </div>
  </div>

      {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal-coldevs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">BROCURE COLDEVS</h5>
        <button type="button" className='btn-close-modal'  data-bs-dismiss="modal" ><i className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
      <img className='img-padding' src={Brocoldevs} width='100%'></img>
      </div>
      <div className="modal-footer">
      <div className='icons-lore-modal'>
            <h3 className='img-hecha-con'>DISEÑADO CON:</h3>
            <span><i className="fa-brands fa-figma figma-10-p"></i></span>
          </div>
      </div>
    </div>
  </div>
</div>
</>
)
}

export default BrochureColDevs