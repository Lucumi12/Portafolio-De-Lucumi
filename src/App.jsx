//RAUTERS
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//PAGUES
import Home from './pages/Home'
import Proyects from './pages/Proyects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


//CONTENIDO
function App() {
return (

<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/proyectos' element={<Proyects />} />
      <Route path='/contacto' element={<Contact />} />
    </Routes>
  </BrowserRouter>

</>
)
}

export default App