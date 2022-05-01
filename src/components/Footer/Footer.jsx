import React from 'react'
import './footer.css'
import {SiPexels} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGoodreads} from 'react-icons/fa'



const Footer = () => {
  return (
    <>
    <div className='footer'>
      <a href="#header" className='footer__logo'>PRANJAL MULANE</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/pranjal.mulane/"><FaInstagramSquare/></a>
        <a href="https://www.pexels.com/@pran"><SiPexels/></a>
        <a href="https://www.goodreads.com/pranjalmulane">
          <FaGoodreads/>
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
            &copy; PranjalMulane. All rights reserved.
        </small>
      </div>


      </div> 
    </>
  )
}

export default Footer