import React from 'react'
import './Footer.scss'

const Footer = () => {
return (
<div className='contenedor-footer'>
    <div className='in-footer'>
        <h1 className='in-footer-text'>Lucumi.tk</h1>
    </div>
    <div className='footer-icons'>
        <a href='https://github.com/Lucumi12?tab=repositories' target="_blank" className='footer-icon'><i class="fa-brands fa-github"></i></a>
        <a href='https://discord.com/invite/nmsk-amigos' target="_blank" className='footer-icon'><i class="fa-brands fa-discord"></i></a>
        <a href='https://www.tiktok.com/@lucumi.tk' target="_blank" className='footer-icon'><i class="fa-brands fa-tiktok"></i></a>
    </div>
    <div className='footer-year'>
        <h1 className='footer-text-year'><i class="fa-solid fa-user-astronaut"></i> 2022</h1>
    </div>
    <div className='footer-job'>
        <h1 className='footer-text-job'><i className="fa-solid fa-star"></i> milfs.com</h1>
    </div>
</div>
)
}

export default Footer