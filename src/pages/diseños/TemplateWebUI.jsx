//ESTILOS
import '../diseños/Styles.scss'


//IMG
import TemplateWeb from '../img/templatewebui.png'


//CONTENIDO
const TemplateWebUI = () => {
return (
<>
  <div className='contenedor-imagen'>
    <div className='card-imagenes'>
      <h1 className='title-img'>TEMPLATE WEB UI</h1>
      <img className='img-padding' src={TemplateWeb} width='100%' type="button" data-bs-toggle="modal"
        data-bs-target="#exampleModal-templateui"></img>
      <h2 className='img-description'>Web de Seguimiento de Pedidos</h2>
      <h2 className='img-description-2'><a className='img-link'
          href='https://www.figma.com/file/lIhU17VosaS8RaY8kmCruN/Template-web-Desing-UI?node-id=0%3A1'
          target='_blanck'>Ver Poryecto</a></h2>
      <h3 className='img-hecha-con'>DISEÑADO CON:</h3>
      <div className='img-icons-lore'>
        <span><i className="fa-brands fa-figma figma-10-p"></i></span>
      </div>
    </div>
  </div>

  {/*
  <!-- Modal --> */}
  <div className="modal fade" id="exampleModal-templateui" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">TEMPLATE WEB UI</h5>
          <button type="button" className='btn-close-modal' data-bs-dismiss="modal"><i
              className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="modal-body">
          <img className='img-padding' src={TemplateWeb} width='100%'></img>
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

export default TemplateWebUI