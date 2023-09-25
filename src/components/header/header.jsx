import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ProfilePic.jpeg'
import Headersocials from './headersocials'

const header = () => {
  return (
    <div className='container header_container'>
<h5> Hello I'm</h5>
<h1> Sanat Santra</h1>
<h5 className="text-light"> .NET FullStack Developer with ReactJs</h5>
   <CTA/>
   <div className='me'>
    <img src={ME} alt="me"/>
   </div>
   <Headersocials/>
   <a href='#contact' className='scroll__down'> Scroll Down</a>
    </div>
  )
}

export default header