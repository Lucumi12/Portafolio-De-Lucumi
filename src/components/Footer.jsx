import React from 'react'
import './Footer.scss'

const Footer = () => {
return (
<div className='contenedor-footer'>
    <div className='in-footer'>
        <h1><i class="fa-solid fa-at"></i>Lucumi.tk</h1>
    </div>
    <div className='footer-icons'>
        <a href='https://github.com/Lucumi12?tab=repositories' target="_blank" className='footer-icon'><i class="fa-brands fa-github"></i></a>
        <a href='https://discord.com/invite/nmsk-amigos' target="_blank" className='footer-icon'><i class="fa-brands fa-discord"></i></a>
        <a href='https://www.tiktok.com/@lucumi.tk' target="_blank" className='footer-icon'><i class="fa-brands fa-tiktok"></i></a>
    </div>
    <div className='footer-year'>
        <h1><i class="fa-solid fa-calendar-check"></i> 2022 - 2023</h1>
    </div>
    <div className='footer-job'>
        <h1><i class="fa-solid fa-icons"></i> xvideos.com</h1>
    </div>
</div>
)
}

export default Footer