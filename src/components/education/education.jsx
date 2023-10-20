import React from 'react';
import './education.css'; 
import {TiMediaRecord} from 'react-icons/ti';
import underGrad from '../../assets/undergrad.png'
import Grad from '../../assets/grad.jpg'

const education=()=> {
 
    return (
        <section id="education" className='addjust_pad'>
        <h2>My Education</h2>
        <div className="container education__container">
        <div className='about__undergrad'>
        <div className="about__undergrad-img">
          <img src={underGrad} alt='undergradUni'/>
        </div>
       
      </div>
      <div className='about__content'>
    
        <p>
        <TiMediaRecord/> Bachelors of Technology in the speciallization of Electrical and Electronics Engineering from GuruNanak Institute of Technology, HYD, India.
        </p>
       
      </div>

      <div className='about__grad'>
        <div className="about__grad-img">
          <img src={Grad} alt='GradUni'/>
        </div>
      
      </div>
      <div className='about__content'>
      
        <p>
        <TiMediaRecord/> Master's in Management Information Systems from The State University of New York at Buffalo, NY, USA.
        </p>
       
      </div>
        </div>
        </section>
    );
  };
export default education;
