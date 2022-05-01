import React from 'react'
import './experiance.css'
import {RiCheckboxCircleFill} from 'react-icons/ri'

const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
             <div> <h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
             <div>
             <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
             <div>
             <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
            <div>
            <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            
          </div>


        </div>
        <div className="experiance__backend">
        <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
             <div>
             <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
             <div>
             <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
             <div>
             <h4>ExpressJS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experiance__details">
              <RiCheckboxCircleFill className='experiance__details-icon'/>
           <div>
           <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
           </div>
            </article>
           
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experiance