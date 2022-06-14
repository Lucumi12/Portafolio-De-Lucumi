//COMPONENTES
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contacto from '../components/Contacto'


//CONTENIDO
const Contact = () => {
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
    <Contacto />
    <Footer />
    </>
  )
}

export default Contact
