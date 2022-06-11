import React from 'react'
import './CardRGB1.scss'

const CardRGB1 = () => {
  return (
    <>
    <div className='contenedor-card-boton-3'>
        <div className='Background-Card-Poryects-3'>
            <div className='contenedor-lenguajes-3'>
                <p className='icon-lenguajes-3'><i class="fa-brands fa-html5"></i> HTML</p>
                <p className='icon-lenguajes-3'><i class="fa-brands fa-css3-alt"></i> CSS</p>
            </div>
            <div className='contenedor-proyecto-3'>
            <div class="card-rgb-1"></div>
            </div>
            <center>
                <h1 className='text-boton-get-started-3'>CARD CON BORDE RGB</h1>
                <button className='btn-ver-codigo-3'><i class="fa-solid fa-code"></i> VER CODIGO</button>
            </center>
        </div>
    </div>
</>
  )
}

export default CardRGB1
