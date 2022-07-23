//COMPONENTES
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


//ESTILOS
import './Proyects.scss'

//PORYECTOS
import DiscordWidget from '../proyectos/DiscordWidget'
import EmbedLucumi from './diseños/EmbedLucumi'
import EmbedTowebgo from './diseños/EmbedTowebgo'
import BrochureColDevs from './diseños/BrochureColDevs'
import PortfolioGreen from './diseños/PortfolioGreen'
import TemplateWebUI from './diseños/TemplateWebUI'



//CONTENIDO
const Proyects = () => {
return (
<>
  <Navbar />
  <div className='contenedor-tile-diseños'>
    <h1>TODOS LOS DISEÑOS</h1>
  </div>
  
  {/* DISEÑOS */}
  <div className='contenedor-all-diseños'>
    <EmbedLucumi />
    <EmbedTowebgo />
    <BrochureColDevs />
    <PortfolioGreen />
    <TemplateWebUI />
  </div>



  <Footer />
</>
)
}

export default Proyects