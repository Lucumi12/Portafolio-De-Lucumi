//COMPONENTES
import React from 'react'
import './Home.scss'
import Navbar from '../components/Navbar'
import Avatar from '../components/Avatarinfo'
import Footer from '../components/Footer'


//CONTENIDO
const Home = () => {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/proyectos' element={<Proyects />}/>
      <Route path='/contacto' element={<Contact />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>

    <Navbar />
    <center>
    <Avatar />
    </center>
    <Footer />
    </>
  )
}

export default Home
