import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Service from './components/Service/Service'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const app = () => {
  return (
    <>
        <Header />
        <Nav/>
        <About/>
        <Experiance/>
        {/* <Service/> */}
        <Portfolio/>
        <Contact/>
        <Footer/>
     </>
  ) 
}

export default app