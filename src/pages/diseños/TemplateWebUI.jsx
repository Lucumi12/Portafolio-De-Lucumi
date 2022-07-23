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
      <img className='img-padding' src={TemplateWeb} width='100%'></img>
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
</>
)
}

export default TemplateWebUI