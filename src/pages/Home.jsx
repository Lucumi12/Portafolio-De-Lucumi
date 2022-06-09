//COMPONENTES
import React from 'react'
import './Home.scss'
import Navbar from '../components/Navbar'
import Avatar from '../components/Avatarinfo'
import Tecnologias from '../components/Tecnologias'
import Footer from '../components/Footer'


//RUTAS
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//CONTENIDO
const Home = () => {
  return (
    <>
    <Navbar />
    <Avatar />
    <Tecnologias />
    <Footer />
    </>
  )
}

export default Home
