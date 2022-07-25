//ESTILOS
import '../diseños/Styles.scss'


//IMG
import PortfolioFree from '../img/porfoliofree.png'


//CONTENIDO
const PortfolioGreen = () => {
return (
<>
  <div className='contenedor-imagen'>
    <div className='card-imagenes'>
      <h1 className='title-img'>PORTFOLIO GREEN</h1>
      <img className='img-padding' src={PortfolioFree} width='100%' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-portfoliogreen"></img>
      <h2 className='img-description'>Diseño de Portafolio Verde para Todos</h2>
      <h2 className='img-description-2'><a className='img-link'
          href='https://www.figma.com/file/fMf8tuUeED0xdKxw5KdaqK/Portfolio-Green-By-Lucumi.tk?node-id=0%3A1'
          target='_blanck'>Usar Gratis!</a></h2>
      <h3 className='img-hecha-con'>DISEÑADO CON:</h3>
      <div className='img-icons-lore'>
        <span><i className="fa-brands fa-figma figma-10-p"></i></span>
      </div>
    </div>
  </div>

        {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal-portfoliogreen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">PORTFOLIO GREEN</h5>
        <button type="button" className='btn-close-modal'  data-bs-dismiss="modal" ><i className="fa-solid fa-xmark"></i></button>
      </div>
      <div className="modal-body">
      <img className='img-padding' src={PortfolioFree} width='100%'></img>
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

export default PortfolioGreen