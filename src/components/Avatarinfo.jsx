import React from 'react'
import Lucumi from '../avatar.png'
import './Avatar.scss'



const Avatar = () => {
return (
<>
  <div className='contenedor-principal-avatarjsx'>
    <div className='card-contenedor-tecnologias'>
      <div className='card'>
        <div className='container'>
          <img src={Lucumi} width='45%'></img>
          <h4 className='title-lucumi'><i className="fa-solid fa-at"></i>Lucumi</h4>
          <p className='p-title-lucumi'>Desarrollador Front-End</p>
          <p className='p-sub-lucumi'><i className="fa-solid fa-angle-right"></i> Lucumi nació en Colombia, Valle, y
            fue
            un niño hambriento en Ecuador. Se convirtió en un magnate de negocios multimillonarios, decidido a
            trasnformarse
            en el hombre más rico del mundo... <i className="fa-solid fa-angle-left"></i></p>
        </div>
      </div>
    </div>
  </div>

  <div className='contenedor-principal-avatarjsx'>
    <div className='card-contenedor'>
      <div className='card'>
        <div className='container'>
          <h4 className='title-tecnologias'>TECNOLOGIAS</h4>
          <div className='contenedor-flex-tecnologias'>
          <p className='p-sub-tecnologias'><i class="fa-brands fa-html5"></i> HTML</p>
          <p className='p-sub-tecnologias'><i class="fa-brands fa-css3-alt"></i> CSS</p>
          </div>
          <div className='contenedor-flex-tecnologias'>
          <p className='p-sub-tecnologias'><i class="fa-brands fa-js"></i> JAVASCRIPT</p>
          <p className='p-sub-tecnologias'><i class="fa-brands fa-react"></i> REACT</p>
          </div>
          <p className='p-sub-tecnologias'><i class="fa-brands fa-sass"></i> SASS</p>
        </div>
      </div>
    </div>
  </div>
  
</>
)
}

export default Avatar