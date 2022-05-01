import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {BsCamera} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>0-1 Years Working</small>
            </article>
          
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>

            <article className="about__card">
              <BsCamera className='about__icon'/>
              <h5>Photography</h5>
              <small>Passionate Photgrapher</small>
            </article>
            
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus hic ullam voluptates tempore? Odit fugiat quisquam placeat aliquam repellendus consequuntur doloremque? Est suscipit sed minima optio! Tempora ducimus corrupti quibusdam!</p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>

        </div>

      </div>
    </section>
  )
}

export default About