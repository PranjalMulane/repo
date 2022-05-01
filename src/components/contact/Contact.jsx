import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import { getDefaultNormalizer } from '@testing-library/react'



const Contact = (props) => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pranjalsmulane@gmail.com</h5>
            <a rel="noreferrer" href="mailto:pranjalsmulane@gmail.com" target="_blank">Send a Mail</a>
          </article>
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9168179109</h5>
            <a rel="noreferrer" href="https://api.whatsapp.com/send?phone+919168179109" target="_blank">Send a message</a>
          </article>
        </div>

        <form class="" action='mailto:pranjalsmulane@gmail.com' method="post" target='_blank' encType='text/plain' >
          <input type="text" name='Name' placeholder='Enter your Full Name' required/>
          <input type="email" name='Email' placeholder='Your Email' required />
          <textarea name="Message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}



export default Contact