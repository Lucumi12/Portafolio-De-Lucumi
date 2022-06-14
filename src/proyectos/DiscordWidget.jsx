import React from 'react'
import './DiscordWidget.scss'

const DiscordWidget = () => {
return (
<>
    <center>
        <div className='contenedor-card-boton-3'>
            <div className='Background-Card-Poryects-3'>
                <div className='contenedor'>
                    <p className='titulo-especial-de-proyectos'><i class="fa-solid fa-certificate"></i> PARTNER DISCORD
                    </p>
                </div>
                <div className='contenedor-proyecto-3'>
                    <iframe src="https://discord.com/widget?id=944797679660199936" width="300" height="250"
                        allowtransparency="true" frameborder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
                <center>
                    <h1 className='text-comunidad-nmsk-amigos'>NMSK-AMIGOS</h1>
                    <a href='https://discord.gg/nmsk-amigos' target='_blank'><button className='btn-discord-aceptar-invitacion'><i className="fa-brands fa-discord"></i> Aceptar Invitacion</button></a>
                </center>
            </div>
        </div>
    </center>
    <div className='separador-150px'>
        -
    </div>
</>
)
}

export default DiscordWidget