//ESTILOS
import '../diseños/Styles.scss'


//IMG
import EdLucumi from '../img/embed1.png'


//CONTENIDO
const EmbedLucumi = () => {
return (
<>
  <div className='contenedor-imagen'>
    <div className='card-imagenes'>
      <h1 className='title-img'>PORTFOLIO LUCUMI.TK</h1>
      <img className='img-padding' src={EdLucumi} width='100%' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></img>
      <h2 className='img-description'>Targeta para el enlace de la web que estas ahora :D</h2>
      <h3 className='img-hecha-con'>DISEÑADO CON:</h3>
      <div className='img-icons-lore'>
        <span><i className="fa-brands fa-figma figma-10-p"></i></span>
      </div>
    </div>
  </div>

  {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">PORTFOLIO LUCUMI.TK</h5>
        <button type="button" className='btn-close-modal'  data-bs-dismiss="modal" ><i className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
      <img className='img-padding' src={EdLucumi} width='100%'></img>
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

export default EmbedLucumi