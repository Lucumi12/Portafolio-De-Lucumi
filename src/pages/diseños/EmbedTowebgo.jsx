//ESTILOS
import '../diseños/Styles.scss'


//IMG
import EdTowebgo from '../img/embed2.png'


//CONTENIDO
const EmbedTowebgo = () => {
return (
<>
  <div className='contenedor-imagen'>
    <div className='card-imagenes'>
      <h1 className='title-img'>ILUSTRACION ToWebGO!</h1>
      <img className='img-padding' src={EdTowebgo} width='100%'></img>
      <h2 className='img-description'>Diseño de targeta para el link de Empresas <a className='img-link'
          href='https://towebgo.tk' target='_blanck'>Towebgo.tk</a></h2>
      <h3 className='img-hecha-con'>DISEÑADO CON:</h3>
      <div className='img-icons-lore'>
        <span><i className="fa-brands fa-figma figma-10-p"></i></span>
      </div>
    </div>
  </div>
</>
)
}

export default EmbedTowebgo