import React from 'react'
import './about.css'
import ME from '../../assets/AboutMe.jpeg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {TbSchool} from 'react-icons/tb'


const about = () => {
  return (
    <section id='about'>
    <h5> Get To Know</h5>  
    <h2> About Me</h2>

    <div className="container about__container">
      <div className='about__me'>
        <div className="about__me-img">
          <img src={ME} alt='About Image'/>
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5><a href='#experience'>Experience</a></h5>
            <small>  6+ years </small>
          </article>

          <article className='about__card'>
            <TbSchool className='about__icon'/>
            <h5> <a href='#education'>Education</a></h5>
           
          </article>

          <article className='about__card' >
            <VscFolderLibrary className='about__icon'/>
            <h5> <a href='#projects'>Projects </a></h5>
            
          </article>

        </div>
        <p>
        With 6+ years of experience as a full-stack .NET developer,Coupled with a Master's Degree in Management Information Systems from the state university of NewYork at Buffalo, I excel in end-to-end web application development. Skilled in both frontend and back-end design. I collaborate effectively to identify requirements, develop efficient code, maintain security, and deploy usercentric solutions. Expert in troubleshooting, debugging, and ensuring seamless production deployment. Good knowledge of algorithms, Data Structure and Design patterns like Singleton, Dependency
Injection, IOC, Factory etc.  Certification in Safe4 scaled
agile practitioner, <a href='https://www.credly.com/badges/7c4d72e7-6ff0-4048-b540-799d2690bb57' target="_blank">PSM I</a>,
<a href='https://www.credly.com/badges/949d874b-9bae-4cfa-8f33-4213ed206cef' target="_blank">PSPO I</a>,
<a href='https://www.credly.com/badges/1bd8c663-9b4e-400e-9ef6-aa8e9adf1d21' target="_blank">AZ-900</a>. Master in managing a complete Software development lifecycle with a keen focus on
customer needs and satisfaction.
        </p>
        <a href='#contact' className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about