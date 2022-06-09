//COMPONENTES
import React from 'react'
import './NavBar.scss'


//RUTAS
import { NavLink } from 'react-router-dom'


//CONTENIDO
const Navbar = () => {
return (
<>
    <nav>
        <input type='checkbox' id='check'></input>
        <label for='check' className='checkbtn'>
            <i className='fas fa-bars'></i>
        </label>
        <label className='logo'><i class="fa-solid fa-at"></i>Lucumi.tk</label>
        <ul>
            <li>
                <NavLink to='/' className='nav-a active'><i className='fa-solid fa-house'></i> Home</NavLink>
            </li>
            <li>
                <NavLink to='/proyects' className='nav-a'><i className='fa-solid fa-diagram-project'></i> Proyects</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className='nav-a'><i className='fa-solid fa-id-card'></i> Contact</NavLink>
            </li>
        </ul>
    </nav>
</>
)
}

export default Navbar