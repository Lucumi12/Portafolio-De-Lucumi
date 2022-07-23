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
      <img className='img-padding' src={PortfolioFree} width='100%'></img>
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
</>
)
}

export default PortfolioGreen