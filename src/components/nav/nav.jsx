import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'
import {BiMessageDetail} from 'react-icons/bi'
import {DiCodeBadge} from 'react-icons/di'


const Nav = () => {
  const[activeNav, setActiveNav ] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : ''}><DiCodeBadge /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><GoBook/></a>
      {/* <a href='#portfolio'><AiOutlineHome/></a> */}
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BiMessageDetail/></a>

    </nav>
  )
}

export default Nav