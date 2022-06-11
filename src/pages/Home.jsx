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
    <Navbar />
    <center>
    <Avatar />
    </center>
    <Footer />
    </>
  )
}

export default Home
