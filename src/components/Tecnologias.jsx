import React from 'react'
import './Tecnologias.scss'

//RUTAS 
import { BrowserRouter, Link } from 'react-router-dom'

const Tecnologias = () => {
return (
<>

    <div className='contenedor-icons'>
        <h1 className='title-technologies'>Technologies</h1>
    </div>
    <div className='contendor-icons-padre'>
        <div className='icons'>
            <p className='icon-html'><i className='fa-brands fa-html5'></i>
                <div className='cantidad-de-avilidad'>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i class='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                </div>
            </p>
            <p className='icon-css'><i className='fa-brands fa-css3-alt'></i>
                <div className='cantidad-de-avilidad'>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i class='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                </div>
            </p>
            <p className='icon-javascript'><i className='fa-brands fa-js-square'></i>
                <div className='cantidad-de-avilidad'>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i class='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                </div>
            </p>
            <p className='icon-sass'><i className='fa-brands fa-sass'></i>
                <div className='cantidad-de-avilidad'>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i class='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                </div>
            </p>
            <p className='icon-react'><i className='fa-brands fa-react'></i>
                <div className='cantidad-de-avilidad'>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo-final'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i class='fa-solid fa-circle'></i></p>
                    <p className='circulo'><i className='fa-solid fa-circle'></i></p>
                </div>
            </p>
            <div className='contenedor-btn-ver-proyectos'>
                <Link to='/proyects'><button className='btn-ver-proyectos'><i className='fa-solid fa-diagram-project'></i> VER PROYECTOS
                </button></Link>
            </div>
        </div>
    </div>

</>
)
}

export default Tecnologias