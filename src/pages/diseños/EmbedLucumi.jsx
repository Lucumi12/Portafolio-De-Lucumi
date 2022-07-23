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
      <img className='img-padding' src={EdLucumi} width='100%'></img>
      <h2 className='img-description'>Targeta para el enlace de la web que estas ahora :D</h2>
      <h3 className='img-hecha-con'>HECHA CON:</h3>
      <div className='img-icons-lore'>
        <span><i className="fa-brands fa-figma figma-10-p"></i></span>
      </div>
    </div>
  </div>
</>
)
}

export default EmbedLucumi