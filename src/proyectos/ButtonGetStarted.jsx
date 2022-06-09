//COMPONENTES
import React from 'react'
import './ButtonGetStartedStyles.scss'


//CONTENIDO
const PcardButton1 = () => {
return (
<>
  <div className='contenedor-card-boton-1'>
    <div className='Background-Card-Poryects'>
      <div className='contenedor-lenguajes'>
        <p className='icon-lenguajes'><i class="fa-brands fa-html5"></i> HTML</p>
        <p className='icon-lenguajes'><i class="fa-brands fa-css3-alt"></i> CSS</p>
      </div>
      <div className='contenedor-proyecto'>
        <button class="cssbuttons-io-button"> Get started
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"></path>
            </svg>
          </div>
        </button>
      </div>
      <center>
        <h1 className='text-boton-get-started'>BOTON GET STARTED</h1>
        <button className='btn-ver-codigo'><i class="fa-solid fa-code"></i> VER CODIGO</button>
      </center>
    </div>
  </div>
</>
)
}

export default PcardButton1