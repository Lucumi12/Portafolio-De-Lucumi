//COMPONENTES
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


//PORYECTOS
import ButtonGetStarted from '../proyectos/ButtonGetStarted'
import ButtonShareMe from '../proyectos/ButtonShareMe'
import ButtonTelegram from '../proyectos/ButtonTelegram'
import CardRGB1 from '../proyectos/CardRGB1'
import DiscordWidget from '../proyectos/DiscordWidget'


//CONTENIDO
const Proyects = () => {
  return (
    <>
    <Navbar />
    <center>
    <ButtonGetStarted />
    <ButtonShareMe />
    <ButtonTelegram />
    <CardRGB1 />
    <DiscordWidget />
    </center>
    <Footer />
    </>
  )
}

export default Proyects
