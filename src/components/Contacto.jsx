import React from 'react'
import './Contacto.scss'

const Contacto = () => {
return (
<>
    <div className='contenedor-contacto-padre'>
        <div className='contenedor-contacto'>
            <div className='text-negocios'>
                <h1>NEGOCIOS</h1>
            </div>
            <div className='btn-negocios'>
                <button className='btn-email'><i className='fa-solid fa-square-envelope'></i> EMAIL</button>
                <a href='https://discord.gg/nmsk-amigos' target="_blank"><button className='btn-discord'><i
                            className="fa-brands fa-discord"></i> NMSK-AMIGOS</button></a>
            </div>
            <div className='text-redes'>
                <h1>REDES</h1>
            </div>
            <div className='btn-redes'>
                <a href='https://github.com/Lucumi12?tab=repositories' target="_blank"><button className='btn-github'><i
                            className="fa-brands fa-github"></i> GITHUB</button></a>
                <a href='https://www.tiktok.com/@lucumi.tk' target="_blank"><button className='btn-tiktok'><i
                            className="fa-brands fa-tiktok"></i> TIKTOK</button></a>
            </div>
        </div>
    </div>
    <div className='separador-150px'>
        -
    </div>
</>
)
}

export default Contacto