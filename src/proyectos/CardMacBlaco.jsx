import React from 'react'
import './CardMacBlanco.scss'

const CardMacBlaco = () => {
return (
<>
    <div className='contenedor-card-boton-4'>
        <div className='Background-Card-Poryects-4'>
            <div className='contenedor-lenguajes-4'>
                <p className='icon-lenguajes-4'><i class="fa-brands fa-html5"></i> HTML</p>
                <p className='icon-lenguajes-4'><i class="fa-brands fa-css3-alt"></i> CSS</p>
            </div>
            <div className='contenedor-proyecto-4'>

                <div class="card-mac">
                    <div class="tools-mac">
                        <div class="circle-mac">
                            <span class="red-mac box-mac"></span>
                        </div>
                        <div class="circle-mac">
                            <span class="yellow-mac box-mac"></span>
                        </div>
                        <div class="circle-mac">
                            <span class="green-mac box-mac"></span>
                        </div>
                    </div>
                    <div class="card__content">
                    </div>
                </div>
            </div>
            <center>
                <h1 className='text-boton-get-started-4'>CARD ESTILO MAC</h1>
                <button className='btn-ver-codigo-4'><i class="fa-solid fa-code"></i> VER CODIGO</button>
            </center>
        </div>
    </div>
</>
)
}

export default CardMacBlaco