//COMPONENTES
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//COMPONENTE STILOS
import './NotFound.scss'


//CONTENIDO
const NotFound = () => {
return (
<>
    <Navbar />
    <center>
    <div className='contenedor-error-agogo'>
        <h1><i class="fa-solid fa-triangle-exclamation"></i> ERROR AGOGO <i class="fa-solid fa-triangle-exclamation"></i></h1>
        <p>LA PAGINA NO EXISTE PIROBO.</p>
    </div>
    </center>
    <Footer />
</>
)
}

export default NotFound