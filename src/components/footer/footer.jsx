import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Explorer</a>
      <ul className='permalinks'>
         <li><a href='#'>Home</a></li>
         <li><a href='#about'>About</a></li>
         <li><a href='#education'>Education</a></li>
         <li><a href='#projects'>Projects</a></li>
         <li><a href='#experience'>Experience</a></li>
         <li><a href='#contact'>Contact</a></li>
         {/* <li><a href='#'>Home</a></li> */}
         {/* <li><a href='#'>Home</a></li> */}
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/sanatsantra/' target='blank'> <BsLinkedin/></a>        
      </div>

      <div className="footer__copywrite">
        <small> &copy; All rights reserved. </small>
      </div>
    </footer>
  )
}

export default footer