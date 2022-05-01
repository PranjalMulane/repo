import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdComputer} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {FiMail} from 'react-icons/fi'
import { useState } from 'react';


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experiance" onClick={()=> setActiveNav('#experiance')} className={activeNav=== '#experiance' ? 'active' : ''}><MdComputer/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav=== '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''}><FiMail/></a>
    </nav>
  )
}

export default Nav