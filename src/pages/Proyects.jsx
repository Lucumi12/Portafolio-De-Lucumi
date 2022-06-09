//COMPONENTES
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

//PORYECTOS
import ButtonGetStarted from '../proyectos/ButtonGetStarted'
import ButtonShareMe from '../proyectos/ButtonShareMe'
import ButtonTelegram from '../proyectos/ButtonTelegram'


//CONTENIDO
const Proyects = () => {
  return (
    <>
    <Navbar />
    <center>
    <ButtonGetStarted />
    <ButtonShareMe />
    <ButtonTelegram />
    </center>
    <Footer />
    </>
  )
}

export default Proyects
