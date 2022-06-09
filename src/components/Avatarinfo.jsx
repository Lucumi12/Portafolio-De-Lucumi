import React from 'react'
import Lucumi from '../avatar.png'
import './Avatar.scss'



const Avatar = () => {
return (
<>
<div className='card-contenedor'>
  <div className='card'>
    <div className='container'>
      <img src={Lucumi} width='45%'></img>
      <h4 className='title-lucumi'><i className="fa-solid fa-at"></i>Lucumi</h4>
      <p className='p-title-lucumi'>Desarrollador Front-End</p>
      <p className='p-sub-lucumi'><i className="fa-solid fa-angle-right"></i> Lucumi nació en Colombia, Valle, y fue
        un niño hambriento en Ecuador. Se convirtió en un magnate de negocios multimillonarios, decidido a trasnformarse
        en el hombre más rico del mundo... <i className="fa-solid fa-angle-left"></i></p>
    </div>
  </div>
</div>


</>
)
}

export default Avatar


