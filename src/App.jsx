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
      <Route path='/proyects' element={<Proyects />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>

</>
)
}

export default App