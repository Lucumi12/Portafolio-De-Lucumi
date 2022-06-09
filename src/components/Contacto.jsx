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
                <button className='btn-discord'><i className="fa-brands fa-discord"></i> NMSK-AMIGOS</button>
            </div>
            <div className='text-redes'>
                <h1>REDES</h1>
            </div>
            <div className='btn-redes'>
                <button className='btn-github'><i className="fa-brands fa-github"></i> GITHUB</button>
                <button className='btn-tiktok'><i className="fa-brands fa-tiktok"></i> TIKTOK</button>
            </div>
        </div>
    </div>
</>
)
}

export default Contacto